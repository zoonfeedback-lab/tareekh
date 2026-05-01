"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode
} from "react";

type MemberAccessContextValue = {
  isMember: boolean;
  setIsMember: (value: boolean) => void;
  ready: boolean;
};

const MemberAccessContext = createContext<MemberAccessContextValue | null>(null);

export function MemberAccessProvider({ children }: { children: ReactNode }) {
  const [isMember, setIsMemberState] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("tareekh-member-access");
    if (stored) {
      setIsMemberState(stored === "true");
    }
    setReady(true);
  }, []);

  const setIsMember = (value: boolean) => {
    setIsMemberState(value);
    window.localStorage.setItem("tareekh-member-access", String(value));
  };

  return (
    <MemberAccessContext.Provider value={{ isMember, setIsMember, ready }}>
      {children}
    </MemberAccessContext.Provider>
  );
}

export function useMemberAccess() {
  const ctx = useContext(MemberAccessContext);
  if (!ctx) {
    throw new Error("useMemberAccess must be used within MemberAccessProvider");
  }
  return ctx;
}
