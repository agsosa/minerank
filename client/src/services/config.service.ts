import getConfig from "next/config";

const {
  publicRuntimeConfig: { appName, apiBaseUrl },
} = getConfig();

interface AppConfig {
  appName: string;
  apiBaseUrl: string;
}

export const getAppConfig = (): AppConfig => ({ appName, apiBaseUrl });

// TODO: Fetch config from server