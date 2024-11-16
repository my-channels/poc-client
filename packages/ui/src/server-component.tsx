import { EntertainmentConfig } from "./store.js";

export function ServerComponent() {
  return (
    <div>
      Server Component Environement: {EntertainmentConfig.getEnvironment()}
    </div>
  );
}
