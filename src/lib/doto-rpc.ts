import { createServerFn } from "@tanstack/react-start";
import { DOTONE } from "@/lib/doto";

export type DotOneStatus = {
  ok: boolean;
  rpc: string;
  block: number | null;
  chainId: number;
};

async function probe(url: string): Promise<number | null> {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ jsonrpc: "2.0", method: "eth_blockNumber", params: [], id: 1 }),
    signal: AbortSignal.timeout(4000),
  });
  const json = (await res.json()) as { result?: string };
  if (!json.result) return null;
  return Number.parseInt(json.result, 16);
}

export const getDotOneStatus = createServerFn({ method: "GET" }).handler(
  async (): Promise<DotOneStatus> => {
    for (const rpc of [DOTONE.rpc, DOTONE.rpcAlt]) {
      try {
        const block = await probe(rpc);
        if (block != null && Number.isFinite(block)) {
          return { ok: true, rpc, block, chainId: DOTONE.chainId };
        }
      } catch {
        /* next endpoint */
      }
    }
    return { ok: false, rpc: DOTONE.rpc, block: null, chainId: DOTONE.chainId };
  },
);
