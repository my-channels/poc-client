"use client";

import { createContext } from "react";
import type { ConfigSchema } from "./store";

export const EntertainmentClientContext = createContext<ConfigSchema | null>(
  null
);

type Props = {
  children: React.ReactNode;
  config: ConfigSchema | null;
};

export function ClientProvider({ children, config }: Props) {
  // NOTE: This doesnt work because it's to let, the value is not yet set
  // const config = EntertainmentConfig.getConfig();
  return (
    <EntertainmentClientContext.Provider value={config}>
      {children}
    </EntertainmentClientContext.Provider>
  );
}
