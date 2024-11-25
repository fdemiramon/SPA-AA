import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { WalletConnectCard } from './components/WalletConnectCard';
import { SmartWalletCard } from './components/SmartWalletCard';
import { WalletInfo } from './components/WalletInfo';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [isCreatingSmartWallet, setIsCreatingSmartWallet] = useState(false);

  const handleCreateSmartWallet = async () => {
    setIsCreatingSmartWallet(true);
    try {
      // Implement Coinbase Smart Wallet creation here
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API call
      console.log('Creating smart wallet...');
    } catch (error) {
      console.error('Error creating smart wallet:', error);
    } finally {
      setIsCreatingSmartWallet(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-base-100 to-base-200 flex flex-col">
      <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <section className="py-16">
          <div className="grid md:grid-cols-2 gap-8">
            <WalletConnectCard />
            <SmartWalletCard
              onCreateWallet={handleCreateSmartWallet}
              isCreating={isCreatingSmartWallet}
            />
          </div>
          <WalletInfo />
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default App;