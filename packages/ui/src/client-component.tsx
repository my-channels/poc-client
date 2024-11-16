"use client";

import { useContext } from "react";
import { EntertainmentClientContext } from "./client-provider";
import { useEntertainmentConfig } from "./hydrate";

export function ClientComponent() {
  const config = useContext(EntertainmentClientContext);

  return <div>Client Component Environement: {config?.environment}</div>;
}

export function HydratedComponent() {
  const config = useEntertainmentConfig();
  // This does not work because the config is not yet set
  // const config = EntertainmentConfig.getConfig();
  if (!config) {
    return <div>Loading...</div>;
  }
  return <div>Hydrated Component: {config?.environment}</div>;
}
