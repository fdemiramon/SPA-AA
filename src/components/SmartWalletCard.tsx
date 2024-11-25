import React from "react";
import { Wallet2Icon, ArrowRight } from "lucide-react";
import { useConnect, useAccount, useDisconnect } from "wagmi";

interface SmartWalletCardProps {
  onCreateWallet: () => Promise<void>;
  isCreating: boolean;
}

export const SmartWalletCard: React.FC<SmartWalletCardProps> = ({
  onCreateWallet,
  isCreating,
}) => {
  const { connect, connectors } = useConnect();
  const { isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  const handleCreateWallet = async () => {
    try {
      const coinbaseConnector = connectors[0];
      if (!coinbaseConnector) {
        throw new Error("Coinbase connector not found");
      }

      await connect({ connector: coinbaseConnector });
      await onCreateWallet();
    } catch (error) {
      console.error("Failed to connect:", error);
    }
  };

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">
          <Wallet2Icon className="w-6 h-6" />
          {isConnected ? "Smart Wallet Connected" : "Create Smart Wallet"}
        </h2>
        <p className="text-base-content/70">
          {isConnected
            ? "Your Coinbase Smart Wallet is connected and ready to use."
            : "Create a new smart contract wallet using Coinbase and secure it with a passkey."}
        </p>
        <div className="card-actions justify-end mt-4">
          {isConnected ? (
            <button className="btn btn-error" onClick={() => disconnect()}>
              Disconnect Wallet
            </button>
          ) : (
            <button
              className={`btn btn-secondary ${isCreating ? "loading" : ""}`}
              onClick={handleCreateWallet}
              disabled={isCreating}
            >
              Create Smart Wallet
              {!isCreating && <ArrowRight className="w-4 h-4 ml-2" />}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
