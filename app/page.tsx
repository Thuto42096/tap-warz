"use client";

import {
  useMiniKit,
  useAddFrame,
  useOpenUrl,
} from "@coinbase/onchainkit/minikit";
import {
  Name,
  Identity,
  Address,
  Avatar,
  EthBalance,
} from "@coinbase/onchainkit/identity";
import {
  ConnectWallet,
  Wallet,
  WalletDropdown,
  WalletDropdownDisconnect,
} from "@coinbase/onchainkit/wallet";
import { useEffect, useMemo, useState, useCallback } from "react";
import { Button } from "./components/DemoComponents";
import { Icon } from "./components/DemoComponents";
import { Home } from "./components/DemoComponents";
import { TappingWar } from "./components/DemoComponents";
import { sdk } from '@farcaster/frame-sdk';

export default function App() {
  const { setFrameReady, isFrameReady, context } = useMiniKit();
  const [frameAdded, setFrameAdded] = useState(false);
  const [activeTab, setActiveTab] = useState("home");
  const [readyAttempts, setReadyAttempts] = useState(0);

  const addFrame = useAddFrame();
  const openUrl = useOpenUrl();

  useEffect(() => {
    const initializeFrame = async () => {
      try {
        console.log('Initializing frame, isFrameReady:', isFrameReady, 'attempts:', readyAttempts);
        if (!isFrameReady && readyAttempts < 5) {
          await sdk.actions.ready();
          await setFrameReady();
          console.log('Frame ready called');
          setReadyAttempts(prev => prev + 1);
        }
      } catch (error) {
        console.error('Error setting frame ready:', error);
        setReadyAttempts(prev => prev + 1);
        // Fallback: try again after a short delay
        if (readyAttempts < 5) {
          setTimeout(() => {
            sdk.actions.ready().catch(() => {});
            setFrameReady();
          }, 1000);
        }
      }
    };

    initializeFrame();
  }, [setFrameReady, isFrameReady, readyAttempts]);

  // Additional fallback effect that runs after component mount
  useEffect(() => {
    const fallbackTimer = setTimeout(() => {
      if (!isFrameReady) {
        console.log('Fallback: Force setting frame ready after 3 seconds');
        sdk.actions.ready().catch(() => {});
        setFrameReady();
      }
    }, 3000);

    return () => clearTimeout(fallbackTimer);
  }, [isFrameReady, setFrameReady]);

  const handleAddFrame = useCallback(async () => {
    const frameAdded = await addFrame();
    setFrameAdded(Boolean(frameAdded));
  }, [addFrame]);

  const saveFrameButton = useMemo(() => {
    if (context && !context.client.added) {
      return (
        <Button
          variant="ghost"
          size="sm"
          onClick={handleAddFrame}
          className="text-[var(--app-accent)] p-4"
          icon={<Icon name="plus" size="sm" />}
        >
          Save Frame
        </Button>
      );
    }

    if (frameAdded) {
      return (
        <div className="flex items-center space-x-1 text-sm font-medium text-[#0052FF] animate-fade-out">
          <Icon name="check" size="sm" className="text-[#0052FF]" />
          <span>Saved</span>
        </div>
      );
    }

    return null;
  }, [context, frameAdded, handleAddFrame]);

  // Show loading state if frame is not ready after reasonable time
  if (!isFrameReady && readyAttempts >= 3) {
    return (
      <div className="flex flex-col min-h-screen font-sans text-[var(--app-foreground)] mini-app-theme from-[var(--app-background)] to-[var(--app-gray)]">
        <div className="w-full max-w-md mx-auto px-4 py-3 flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[var(--app-accent)] mx-auto mb-4"></div>
            <p className="text-[var(--app-foreground-muted)]">Loading Tap Warz...</p>
            <p className="text-xs text-[var(--app-foreground-muted)] mt-2">
              Frame ready: {isFrameReady ? 'Yes' : 'No'} | Attempts: {readyAttempts}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen font-sans text-[var(--app-foreground)] mini-app-theme from-[var(--app-background)] to-[var(--app-gray)]">
      <div className="w-full max-w-md mx-auto px-4 py-3">
        <header className="flex justify-between items-center mb-3 h-11">
          <div>
            <div className="flex items-center space-x-2">
              <Wallet className="z-10">
                <ConnectWallet>
                  <Name className="text-inherit" />
                </ConnectWallet>
                <WalletDropdown>
                  <Identity className="px-4 pt-3 pb-2" hasCopyAddressOnClick>
                    <Avatar />
                    <Name />
                    <Address />
                    <EthBalance />
                  </Identity>
                  <WalletDropdownDisconnect />
                </WalletDropdown>
              </Wallet>
            </div>
          </div>
          <div>{saveFrameButton}</div>
        </header>

        <main className="flex-1">
          {activeTab === "home" && <Home setActiveTab={setActiveTab} />}
          {activeTab === "game" && <TappingWar setActiveTab={setActiveTab} />}
        </main>

        <footer className="mt-2 pt-4 flex justify-center">
          <Button
            variant="ghost"
            size="sm"
            className="text-[var(--ock-text-foreground-muted)] text-xs"
            onClick={() => openUrl("https://base.org/builders/minikit")}
          >
            Built on Base with MiniKit
          </Button>
        </footer>
      </div>
    </div>
  );
}
