"use client";

import Header from "./components/Header";
import MainPage from "./components/Mainpage";
import { ChainProvider } from "@cosmos-kit/react"
import { chains, assets } from "chain-registry"
import { wallets as keplrwallet } from "@cosmos-kit/keplr";
import { wallets as leapwallet } from "@cosmos-kit/leap";
import "@interchain-ui/react/styles";

export default function Home() {

  return (
    <ChainProvider
      chains={chains}
      assetLists={assets}
      wallets={[keplrwallet[0], leapwallet[0]]}
    >
      <div className="p-10 w-full flex flex-col justify-center items-center overflow-x-hidden ">
        <Header />
        <div className="max-w-[1280px] w-full">
          <MainPage />
        </div>
      </div>
    </ChainProvider>
  );
}
