import { StoreProvider } from "./hydrate";
import { EntertainmentConfig } from "./store";

export function HydrateProvider({ children }: { children: React.ReactNode }) {
  const config = EntertainmentConfig.getConfig();
  if (!config) {
    throw new Error("Config is not set");
  }
  return <StoreProvider config={config}>{children}</StoreProvider>;
}
