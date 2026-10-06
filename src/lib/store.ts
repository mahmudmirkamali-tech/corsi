import { dotoAddress, dotoTx, TREASURY } from "@/lib/doto";
import { splitHours, type Ledger } from "@/lib/economy";

export type LearnerRequest = {
  id: string;
  name: string;
  email: string;
  city: string;
  subject: string;
  hours: number;
  status: "open" | "settled";
  wallet: string;
  at: string;
};

export type CoachApp = {
  id: string;
  name: string;
  email: string;
  city: string;
  subject: string;
  status: "pending" | "approved";
  wallet: string;
  at: string;
};

export type Session = {
  id: string;
  requestId: string;
  coachId: string;
  learnerName: string;
  coachName: string;
  subject: string;
  hours: number;
  total: number;
  coachShare: number;
  kishShare: number;
  networkShare: number;
  tokenId: string;
  txHash: string;
  block: number;
  at: string;
};

export type ClassToken = {
  tokenId: string;
  sessionId: string;
  hours: number;
  doto: number;
  subject: string;
  learner: string;
  coach: string;
  learnerWallet: string;
  coachWallet: string;
  txHash: string;
  block: number;
  at: string;
};

export type ChainActivity = {
  id: string;
  kind: "mint" | "pay";
  label: string;
  from: string;
  to: string;
  amount: number;
  asset: "DOTO" | "ATISA";
  txHash: string;
  block: number;
  at: string;
};

type ChainMeta = {
  block: number;
  tokenSeq: number;
};

const REQUESTS_KEY = "atisa-coach-requests";
const COACHES_KEY = "atisa-coach-apps";
const SESSIONS_KEY = "atisa-sessions";
const TOKENS_KEY = "atisa-doto-tokens";
const ACTIVITY_KEY = "atisa-doto-activity";
const META_KEY = "atisa-doto-meta";
const EVENT = "atisa-store";

function notify() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(EVENT));
}

function readList<T>(key: string): T[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = JSON.parse(localStorage.getItem(key) ?? "[]") as unknown;
    return Array.isArray(raw) ? (raw as T[]) : [];
  } catch {
    return [];
  }
}

function writeList<T>(key: string, items: T[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(key, JSON.stringify(items.slice(0, 80)));
  notify();
}

function loadMeta(): ChainMeta {
  if (typeof window === "undefined") return { block: 1_000_505, tokenSeq: 0 };
  try {
    const raw = JSON.parse(localStorage.getItem(META_KEY) ?? "null") as ChainMeta | null;
    if (raw && typeof raw.block === "number") return raw;
  } catch {
    /* ignore */
  }
  return { block: 1_000_505, tokenSeq: 0 };
}

function saveMeta(meta: ChainMeta) {
  if (typeof window === "undefined") return;
  localStorage.setItem(META_KEY, JSON.stringify(meta));
}

export function subscribeStore(onChange: () => void) {
  window.addEventListener(EVENT, onChange);
  return () => window.removeEventListener(EVENT, onChange);
}

export function loadRequests(): LearnerRequest[] {
  return readList<LearnerRequest>(REQUESTS_KEY).map((item) => ({
    ...item,
    status: item.status === "settled" ? "settled" : "open",
    wallet: item.wallet || dotoAddress(item.email || item.name),
  }));
}

export function saveRequest(
  entry: Omit<LearnerRequest, "id" | "at" | "status" | "wallet">,
): LearnerRequest {
  const item: LearnerRequest = {
    ...entry,
    status: "open",
    wallet: dotoAddress(entry.email),
    id: crypto.randomUUID(),
    at: new Date().toISOString(),
  };
  writeList(REQUESTS_KEY, [item, ...loadRequests()]);
  return item;
}

export function loadCoaches(): CoachApp[] {
  return readList<CoachApp>(COACHES_KEY).map((item) => ({
    ...item,
    wallet: item.wallet || dotoAddress(item.email || item.name),
  }));
}

export function saveCoach(entry: Omit<CoachApp, "id" | "at" | "status" | "wallet">): CoachApp {
  const item: CoachApp = {
    ...entry,
    status: "pending",
    wallet: dotoAddress(entry.email),
    id: crypto.randomUUID(),
    at: new Date().toISOString(),
  };
  writeList(COACHES_KEY, [item, ...loadCoaches()]);
  return item;
}

export function referCoach(id: string): CoachApp[] {
  const next = loadCoaches().map((coach) =>
    coach.id === id ? { ...coach, status: "approved" as const } : coach,
  );
  writeList(COACHES_KEY, next);
  return next;
}

export function loadSessions(): Session[] {
  return readList<Session>(SESSIONS_KEY).map((item) => ({
    ...item,
    tokenId: item.tokenId || "—",
    txHash: item.txHash || "",
    block: item.block || 0,
  }));
}

export function loadTokens(): ClassToken[] {
  return readList<ClassToken>(TOKENS_KEY);
}

export function loadActivity(): ChainActivity[] {
  return readList<ChainActivity>(ACTIVITY_KEY);
}

function pushActivity(items: ChainActivity[]) {
  writeList(ACTIVITY_KEY, [...items, ...loadActivity()]);
}

export function settleSession(requestId: string, coachId: string): Session | null {
  const request = loadRequests().find((item) => item.id === requestId);
  const coach = loadCoaches().find((item) => item.id === coachId);
  if (!request || request.status === "settled" || !coach || coach.status !== "approved") {
    return null;
  }
  const ledger: Ledger = splitHours(request.hours);
  const meta = loadMeta();
  const block = meta.block + 1;
  const tokenSeq = meta.tokenSeq + 1;
  const tokenId = `ATISA-${String(tokenSeq).padStart(4, "0")}`;
  const mintTx = dotoTx(`${request.id}:${coach.id}:${tokenId}:${block}`);
  const session: Session = {
    id: crypto.randomUUID(),
    requestId,
    coachId,
    learnerName: request.name,
    coachName: coach.name,
    subject: request.subject,
    hours: ledger.hours,
    total: ledger.total,
    coachShare: ledger.coach,
    kishShare: ledger.kish,
    networkShare: ledger.network,
    tokenId,
    txHash: mintTx,
    block,
    at: new Date().toISOString(),
  };
  const token: ClassToken = {
    tokenId,
    sessionId: session.id,
    hours: ledger.hours,
    doto: ledger.total,
    subject: request.subject,
    learner: request.name,
    coach: coach.name,
    learnerWallet: request.wallet,
    coachWallet: coach.wallet,
    txHash: mintTx,
    block,
    at: session.at,
  };
  const payTx = dotoTx(`${mintTx}:split`);
  const now = session.at;
  const activities: ChainActivity[] = [
    {
      id: crypto.randomUUID(),
      kind: "mint",
      label: `ضرب توکن جلسه ${tokenId}`,
      from: TREASURY.network,
      to: request.wallet,
      amount: ledger.hours,
      asset: "ATISA",
      txHash: mintTx,
      block,
      at: now,
    },
    {
      id: crypto.randomUUID(),
      kind: "pay",
      label: "دستمزد مربی",
      from: request.wallet,
      to: coach.wallet,
      amount: ledger.coach,
      asset: "DOTO",
      txHash: payTx,
      block,
      at: now,
    },
    {
      id: crypto.randomUUID(),
      kind: "pay",
      label: "سهم پشتیبان کیش",
      from: request.wallet,
      to: TREASURY.kish,
      amount: ledger.kish,
      asset: "DOTO",
      txHash: payTx,
      block,
      at: now,
    },
    {
      id: crypto.randomUUID(),
      kind: "pay",
      label: "سهم شبکه",
      from: request.wallet,
      to: TREASURY.network,
      amount: ledger.network,
      asset: "DOTO",
      txHash: payTx,
      block,
      at: now,
    },
  ];

  saveMeta({ block, tokenSeq });
  writeList(
    REQUESTS_KEY,
    loadRequests().map((item) =>
      item.id === requestId ? { ...item, status: "settled" as const } : item,
    ),
  );
  writeList(SESSIONS_KEY, [session, ...loadSessions()]);
  writeList(TOKENS_KEY, [token, ...loadTokens()]);
  pushActivity(activities);
  return session;
}

export function tokenizeNow(hours = 1): Session {
  let open = loadRequests().find((item) => item.status !== "settled");
  let approved = loadCoaches().find((item) => item.status === "approved");

  if (!approved) {
    const pending = loadCoaches().find((item) => item.status === "pending");
    if (pending) {
      referCoach(pending.id);
    } else {
      const coach = saveCoach({
        name: "مربی احرازشده کیش",
        email: "coach@atisa.doto",
        city: "کیش",
        subject: "بلاک‌چین و دوتو",
      });
      referCoach(coach.id);
    }
    approved = loadCoaches().find((item) => item.status === "approved");
  }

  if (!open) {
    open = saveRequest({
      name: "شاگرد شبکه دوتو",
      email: "learner@atisa.doto",
      city: "کیش",
      subject: "بلاک‌چین و دوتو",
      hours,
    });
  }

  if (!open || !approved) {
    throw new Error("برای تسویه، مربی ارجاع‌شده لازم است.");
  }
  const session = settleSession(open.id, approved.id);
  if (!session) {
    throw new Error("تسویه انجام نشد.");
  }
  return session;
}

export function economyTotals() {
  return loadSessions().reduce(
    (acc, session) => ({
      hours: acc.hours + session.hours,
      total: acc.total + session.total,
      coach: acc.coach + session.coachShare,
      kish: acc.kish + session.kishShare,
      network: acc.network + session.networkShare,
    }),
    { hours: 0, total: 0, coach: 0, kish: 0, network: 0 },
  );
}
