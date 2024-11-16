import invariant from "tiny-invariant";
import { z } from "zod";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const EntertainmentConfigSchema = z.object({
  environment: z.enum(["development", "production"]),
  debug: z.boolean().default(false),
});

export type ConfigSchema = z.infer<typeof EntertainmentConfigSchema>;

export type Store = {
  config: z.infer<typeof EntertainmentConfigSchema> | null;
  initialize: (config: Partial<Store["config"]>) => void;
  getConfig: () => Store["config"];
  getEnvironment: () => ConfigSchema["environment"] | undefined;
};

export const useEntertainmentStore = create<Store>()(
  immer((set, get) => ({
    config: null,
    initialize: (config) => {
      const result = z
        .object({
          environment: z.enum(["development", "production"]),
          debug: z.boolean().default(false),
        })
        .parse(config);
      set((state) => {
        state.config = result;
      });
    },
    getConfig: () => get().config,
    getEnvironment: () => get().config?.environment,
  }))
);

// used on the server side
export const EntertainmentConfig = {
  initialize: (storeConfig?: Partial<Store["config"]>) => {
    const config = {
      environment: storeConfig?.environment,
      debug: storeConfig?.debug,
    };

    const result = EntertainmentConfigSchema.parse(config);

    useEntertainmentStore.getState().initialize(result);
  },
  getEnvironment: () => {
    const env = useEntertainmentStore.getState().getEnvironment();
    invariant(env, "Config is not set");
    return env;
  },
  getConfig: () => {
    invariant(useEntertainmentStore.getState().config, "Config is not set");
    return useEntertainmentStore.getState().config;
  },
  setConfig: (config: ConfigSchema) =>
    useEntertainmentStore.setState({ config }),
  subscribe: useEntertainmentStore.subscribe,
};
