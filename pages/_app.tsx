import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import "@rainbow-me/rainbowkit/styles.css";
import { LivepeerConfig } from "@livepeer/react";
import { RainbowKitProvider, connectorsForWallets } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { ThemeProvider } from "../utils";
import { Toaster } from "react-hot-toast";
import { ApolloProvider } from "@apollo/client";
import { ApolloClient, LivePeerClient } from "../clients";
import {
	mainnet,
	polygon,
	sepolia,
	polygonMumbai,
	polygonZkEvm,
	polygonZkEvmTestnet,
	bsc,
	bscTestnet,
	arbitrum,
	arbitrumGoerli,
} from 'wagmi/chains';
import {
	injectedWallet,
	metaMaskWallet,
	rainbowWallet,
	trustWallet,
	walletConnectWallet,
	braveWallet,
	coinbaseWallet,
	ledgerWallet,
	argentWallet,
	imTokenWallet,
	omniWallet,
	uniswapWallet,
	okxWallet,
	safeWallet
} from '@rainbow-me/rainbowkit/wallets';

const ETH_CHAINS = [
	mainnet,
	polygon,
	sepolia,
	polygonMumbai,
	polygonZkEvm,
	polygonZkEvmTestnet,
	bsc,
	bscTestnet,
	arbitrum,
	arbitrumGoerli,
];

const { chains, publicClient, webSocketPublicClient } = configureChains(
	ETH_CHAINS,
	[publicProvider()]
);

const projectId: any = process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID;
const API_KEY: any = process.env.NEXT_PUBLIC_ALCHEMY_Sepolia_API_KEY;

const connectors = connectorsForWallets([
	{
		groupName: 'Recommended',
		wallets: [
			injectedWallet({ chains }),
			metaMaskWallet({ projectId, chains }),
			uniswapWallet({ projectId, chains }),
			coinbaseWallet({ chains, appName: 'DAPP KIT' }),
			rainbowWallet({ projectId, chains }),
			walletConnectWallet({ projectId, chains }),
		],
	},
	{
		groupName: 'Others',
		wallets: [
			trustWallet({ projectId, chains }),
			braveWallet({ chains }),
			ledgerWallet({ projectId, chains }),
			argentWallet({ projectId, chains }),
			imTokenWallet({ projectId, chains }),
			omniWallet({ projectId, chains }),
			okxWallet({ projectId, chains }),
			safeWallet({ chains }),
		],
	},
]);

const wagmiConfig = createConfig({
	autoConnect: true,
	connectors,
	publicClient,
	webSocketPublicClient,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config ={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <ThemeProvider>
          <ApolloProvider client={ApolloClient}>
            <LivepeerConfig client={LivePeerClient}>
              <Component {...pageProps} />
              <Toaster />
            </LivepeerConfig>
          </ApolloProvider>
        </ThemeProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
