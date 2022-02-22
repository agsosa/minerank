import getConfig from "next/config";

const {
  publicRuntimeConfig: { appName },
} = getConfig();

interface AppConfig {
  appName: string;
}

export const getAppConfig = (): AppConfig => ({ appName });
