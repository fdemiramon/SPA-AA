import React from "react";
import { WalletIcon } from "lucide-react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useDisconnect } from "wagmi";

export const WalletConnectCard: React.FC = () => {
  const { isConnected, connector } = useAccount();
  const { disconnect } = useDisconnect();

  const isEOAWallet = isConnected && connector?.id !== "coinbaseWalletSDK";
  const shouldShow = !isConnected || isEOAWallet;
  const isSingleCard = isConnected;

  return (
    <div
      className={`card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-500 ease-in-out transform
        ${
          shouldShow
            ? "scale-100 opacity-100"
            : "scale-95 opacity-0 pointer-events-none absolute"
        }
        ${isSingleCard ? "md:col-span-2 md:mx-auto md:w-[600px]" : ""}`}
    >
      <div className="card-body">
        <h2 className="card-title flex items-center gap-2">
          <WalletIcon className="w-6 h-6" />
          {isEOAWallet ? "EOA Wallet Connected" : "Connect EOA Wallet"}
        </h2>
        <p className="text-base-content/70 mb-6">
          {isEOAWallet
            ? "Your EOA wallet is connected and ready to use."
            : "Connect your existing Ethereum wallet using RainbowKit's secure interface."}
        </p>
        <div className="card-actions justify-end">
          {isEOAWallet ? (
            <button className="btn btn-error" onClick={() => disconnect()}>
              Disconnect Wallet
            </button>
          ) : (
            <ConnectButton />
          )}
        </div>
      </div>
    </div>
  );
};
