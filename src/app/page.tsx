"use client";
import WormholeConnect, { WormholeConnectConfig } from '@wormhole-foundation/wormhole-connect';

const config: WormholeConnectConfig = {
  networks: ["goerli", "solana"],
  tokens: ["ETH", "WETH", "MATIC", "WMATIC"],
  rpcs: {
    goerli: "https://rpc.ankr.com/eth",
    solana: "https://rpc.ankr.com/solana",
  }
}
export default function Home() {
  return (
    <WormholeConnect config={config}/>
  );
}
