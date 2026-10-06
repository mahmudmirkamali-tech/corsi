export const DOTONE = {
  chainId: 505,
  chainIdHex: "0x1f9",
  name: "DotOne Smart Chain",
  shortName: "دات‌وان",
  symbol: "DOTO",
  decimals: 18,
  rpc: "https://rpc.dotone.network",
  rpcAlt: "https://rpc.dotone.online",
  explorer: "https://dotscan.one",
  explorerAlt: "https://explorer.dotone.network",
  tokenName: "ATISA",
} as const;

export function hashHex(input: string, bytes = 32): string {
  const data = new TextEncoder().encode(input);
  const out = new Uint8Array(bytes);
  let h1 = 2166136261;
  let h2 = 2246822519;
  for (let i = 0; i < data.length; i++) {
    h1 ^= data[i];
    h1 = Math.imul(h1, 16777619);
    h2 = Math.imul(h2 ^ data[i], 3266489917);
  }
  for (let i = 0; i < bytes; i++) {
    h1 = Math.imul(h1 ^ (h2 >>> (i % 16)), 2654435761) >>> 0;
    h2 = Math.imul(h2 ^ (h1 >>> ((i * 3) % 16)), 1597334677) >>> 0;
    out[i] = (h1 ^ h2 ^ (i * 19)) & 0xff;
  }
  return [...out].map((b) => b.toString(16).padStart(2, "0")).join("");
}

export function dotoAddress(seed: string): string {
  return `0x${hashHex(`doto:addr:${seed}`, 20)}`;
}

export function dotoTx(seed: string): string {
  return `0x${hashHex(`doto:tx:${seed}`, 32)}`;
}

export function shortAddr(address: string): string {
  if (address.length < 12) return address;
  return `${address.slice(0, 6)}…${address.slice(-4)}`;
}

export const TREASURY = {
  kish: dotoAddress("kish-treasury-mirkamali"),
  network: dotoAddress("atisa-network-505"),
} as const;

export const ADD_CHAIN_PARAMS = {
  chainId: DOTONE.chainIdHex,
  chainName: DOTONE.name,
  nativeCurrency: {
    name: "Doto",
    symbol: DOTONE.symbol,
    decimals: DOTONE.decimals,
  },
  rpcUrls: [DOTONE.rpc, DOTONE.rpcAlt],
  blockExplorerUrls: [DOTONE.explorer, DOTONE.explorerAlt],
} as const;

export async function addDotOneChain(): Promise<string> {
  const eth = window.ethereum;
  if (!eth) throw new Error("کیف‌پول متصل نیست.");
  await eth.request({
    method: "wallet_addEthereumChain",
    params: [ADD_CHAIN_PARAMS],
  });
  const accounts = (await eth.request({ method: "eth_requestAccounts" })) as string[];
  const account = accounts[0];
  if (!account) throw new Error("حسابی انتخاب نشد.");
  return account;
}

export async function readDotoBalance(address: string): Promise<number | null> {
  const eth = window.ethereum;
  if (!eth) return null;
  const hex = (await eth.request({
    method: "eth_getBalance",
    params: [address, "latest"],
  })) as string;
  const wei = BigInt(hex);
  return Number(wei / 10n ** 15n) / 1000;
}

declare global {
  interface Window {
    ethereum?: {
      request: (args: { method: string; params?: unknown[] }) => Promise<unknown>;
    };
  }
}
