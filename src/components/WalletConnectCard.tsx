import React from 'react';
import { WalletIcon } from 'lucide-react';
import { ConnectButton } from '@rainbow-me/rainbowkit';

export const WalletConnectCard: React.FC = () => {
  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
      <div className="card-body">
        <h2 className="card-title flex items-center gap-2">
          <WalletIcon className="w-6 h-6" />
          Connect EOA Wallet
        </h2>
        <p className="text-base-content/70 mb-6">
          Connect your existing Ethereum wallet using RainbowKit's secure interface.
        </p>
        <div className="card-actions justify-end">
          <ConnectButton />
        </div>
      </div>
    </div>
  );
};