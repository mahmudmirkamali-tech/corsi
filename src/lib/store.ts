import { splitHours, type Ledger } from "@/lib/economy";

export type LearnerRequest = {
  id: string;
  name: string;
  email: string;
  city: string;
  subject: string;
  hours: number;
  status: "open" | "settled";
  at: string;
};

export type CoachApp = {
  id: string;
  name: string;
  email: string;
  city: string;
  subject: string;
  status: "pending" | "approved";
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
  at: string;
};

const REQUESTS_KEY = "atisa-coach-requests";
const COACHES_KEY = "atisa-coach-apps";
const SESSIONS_KEY = "atisa-sessions";
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

export function subscribeStore(onChange: () => void) {
  window.addEventListener(EVENT, onChange);
  return () => window.removeEventListener(EVENT, onChange);
}

export function loadRequests(): LearnerRequest[] {
  return readList<LearnerRequest>(REQUESTS_KEY).map((item) => ({
    ...item,
    status: item.status === "settled" ? "settled" : "open",
  }));
}

export function saveRequest(
  entry: Omit<LearnerRequest, "id" | "at" | "status">,
): LearnerRequest {
  const item: LearnerRequest = {
    ...entry,
    status: "open",
    id: crypto.randomUUID(),
    at: new Date().toISOString(),
  };
  writeList(REQUESTS_KEY, [item, ...loadRequests()]);
  return item;
}

export function loadCoaches(): CoachApp[] {
  return readList<CoachApp>(COACHES_KEY);
}

export function saveCoach(entry: Omit<CoachApp, "id" | "at" | "status">): CoachApp {
  const item: CoachApp = {
    ...entry,
    status: "pending",
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
  return readList<Session>(SESSIONS_KEY);
}

export function settleSession(requestId: string, coachId: string): Session | null {
  const request = loadRequests().find((item) => item.id === requestId);
  const coach = loadCoaches().find((item) => item.id === coachId);
  if (!request || request.status === "settled" || !coach || coach.status !== "approved") {
    return null;
  }
  const ledger: Ledger = splitHours(request.hours);
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
    at: new Date().toISOString(),
  };
  writeList(
    REQUESTS_KEY,
    loadRequests().map((item) =>
      item.id === requestId ? { ...item, status: "settled" as const } : item,
    ),
  );
  writeList(SESSIONS_KEY, [session, ...loadSessions()]);
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
