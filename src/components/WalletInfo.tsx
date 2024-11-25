import React from 'react';
import { useAccount, useBalance } from 'wagmi';

export const WalletInfo: React.FC = () => {
  const { address, isConnected } = useAccount();
  const { data: balance } = useBalance({
    address,
  });

  if (!isConnected) return null;

  return (
    <div className="mt-16">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Wallet Information</h2>
          <div className="grid gap-4">
            <div className="stat">
              <div className="stat-title">Address</div>
              <div className="stat-value text-primary text-xl font-mono">
                {address?.slice(0, 6)}...{address?.slice(-4)}
              </div>
            </div>
            <div className="stat">
              <div className="stat-title">Balance</div>
              <div className="stat-value text-secondary">
                {balance?.formatted} {balance?.symbol}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};