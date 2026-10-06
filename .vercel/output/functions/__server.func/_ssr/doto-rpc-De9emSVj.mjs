import { n as TSS_SERVER_FUNCTION, t as createServerFn } from "./ssr.mjs";
import { t as DOTONE } from "./doto-CtzYHbiq.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/doto-rpc-De9emSVj.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
async function probe(url) {
	const json = await (await fetch(url, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			jsonrpc: "2.0",
			method: "eth_blockNumber",
			params: [],
			id: 1
		}),
		signal: AbortSignal.timeout(4e3)
	})).json();
	if (!json.result) return null;
	return Number.parseInt(json.result, 16);
}
var getDotOneStatus_createServerFn_handler = createServerRpc({
	id: "037a7356a08ddd6f88c724ccc4cff023ea3b7486dd6b04cac1af9adcc1cc4a97",
	name: "getDotOneStatus",
	filename: "src/lib/doto-rpc.ts"
}, (opts) => getDotOneStatus.__executeServer(opts));
var getDotOneStatus = createServerFn({ method: "GET" }).handler(getDotOneStatus_createServerFn_handler, async () => {
	for (const rpc of [DOTONE.rpc, DOTONE.rpcAlt]) try {
		const block = await probe(rpc);
		if (block != null && Number.isFinite(block)) return {
			ok: true,
			rpc,
			block,
			chainId: DOTONE.chainId
		};
	} catch {}
	return {
		ok: false,
		rpc: DOTONE.rpc,
		block: null,
		chainId: DOTONE.chainId
	};
});
//#endregion
export { getDotOneStatus_createServerFn_handler };
