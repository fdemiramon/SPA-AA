import React from 'react';
import { WalletIcon, Wallet2Icon, ArrowDownIcon } from 'lucide-react';
import { WalletFeatureCard } from './WalletFeatureCard';

export const Hero: React.FC = () => {
  return (
    <section className="py-20">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Choose Your Ethereum Wallet
        </h1>
        <p className="text-xl mb-12 text-base-content/80 max-w-3xl mx-auto">
          Experience seamless blockchain interaction with your preferred wallet type.
          Whether you choose a traditional EOA wallet or a smart contract wallet,
          our DApp provides a unified experience for all users.
        </p>
        
        {/* Information Cards */}
        <div className="flex flex-wrap gap-6 justify-center mb-12">
          <WalletFeatureCard
            icon={<WalletIcon className="w-8 h-8" />}
            title="EOA Wallet"
            description="Traditional externally owned accounts. Perfect for users who already have MetaMask, WalletConnect, or other providers"
            features={[
              "Full wallet control",
              "Wide ecosystem support",
              "Multiple device usage"
            ]}
            type="primary"
          />
          <WalletFeatureCard
            icon={<Wallet2Icon className="w-8 h-8" />}
            title="Smart Contract Wallet"
            description="Next-generation contract-based wallets. Ideal for users who want enhanced security and recovery options"
            features={[
              "Social recovery",
              "Transaction batching",
              "Gasless transactions"
            ]}
            type="secondary"
          />
        </div>

        {/* Scroll indicator */}
        <div className="flex flex-col items-center gap-3 text-base-content/70">
          <p className="text-sm font-medium">Scroll down to connect</p>
          <ArrowDownIcon className="w-5 h-5 animate-bounce" />
        </div>
      </div>
    </section>
  );
};