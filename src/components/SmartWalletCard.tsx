import React from 'react';
import { Wallet2Icon, ArrowRight } from 'lucide-react';

interface SmartWalletCardProps {
  onCreateWallet: () => Promise<void>;
  isCreating: boolean;
}

export const SmartWalletCard: React.FC<SmartWalletCardProps> = ({
  onCreateWallet,
  isCreating,
}) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">
          <Wallet2Icon className="w-6 h-6" />
          Create Smart Wallet
        </h2>
        <p className="text-base-content/70">
          Create a new smart contract wallet using Coinbase and secure it with a passkey.
        </p>
        <div className="card-actions justify-end mt-4">
          <button
            className={`btn btn-secondary ${isCreating ? 'loading' : ''}`}
            onClick={onCreateWallet}
            disabled={isCreating}
          >
            Create Smart Wallet
            {!isCreating && <ArrowRight className="w-4 h-4 ml-2" />}
          </button>
        </div>
      </div>
    </div>
  );
};