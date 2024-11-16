"use client";

import { useEffect, useState } from "react";
import {
  EntertainmentConfig,
  useEntertainmentStore,
  type ConfigSchema,
} from "./store";

type Props = {
  children: React.ReactNode;
  config: ConfigSchema;
};

export function StoreProvider({ children, config }: Props) {
  const [isHydrated, setIsHydrated] = useState(false);
  useEffect(() => {
    // Hydrate the store with the server state
    EntertainmentConfig.setConfig(config);

    setIsHydrated(true);
  }, [config]);

  return children;
}

export function useEntertainmentConfig(): ConfigSchema | null {
  return useEntertainmentStore((state) => state.config);
}
