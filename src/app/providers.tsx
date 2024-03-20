"use client";
import { WagmiProvider } from "wagmi";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import {
  darkTheme,
  getDefaultConfig,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { baseSepolia } from "wagmi/chains";

const queryClient = new QueryClient();

const config = getDefaultConfig({
  appName: "camp",
  projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_ID as string,
  chains: [baseSepolia],
  ssr: true,
});

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider modalSize="compact" theme={darkTheme()}>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
