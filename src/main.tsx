import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RainbowKitProvider, lightTheme } from "@rainbow-me/rainbowkit";
import { createConfig, WagmiProvider, http } from "wagmi";
import App from "./App";
import "@rainbow-me/rainbowkit/styles.css";
import "./index.css";
import { mainnet, sepolia } from "wagmi/chains";
import { coinbaseWallet } from "wagmi/connectors";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create wagmi config
export const wagmiConfig = createConfig({
  chains: [mainnet, sepolia],
  connectors: [
    coinbaseWallet({ appName: "Create Wagmi", preference: "smartWalletOnly" }),
  ],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
});
const queryClient = new QueryClient();

const root = document.getElementById("root");
if (!root) throw new Error("Root element not found");

const Disclaimer: DisclaimerComponent = ({ Text, Link }) => (
  <Text>
    By connecting your wallet, you agree to the{" "}
    <Link href="https://termsofservice.xyz">Terms of Service</Link> and
    acknowledge you have read and understand the protocol{" "}
    <Link href="https://disclaimer.xyz">Disclaimer</Link>
  </Text>
);

createRoot(root).render(
  <StrictMode>
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          appInfo={{
            appName: "RainbowKit Demo",
            disclaimer: Disclaimer,
          }}
          modalSize="compact"
          showRecentTransactions={true}
          theme={lightTheme({
            accentColor: "#7c3aed",
            borderRadius: "medium",
          })}
        >
          <App />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  </StrictMode>
);
