import getConfig from "next/config";

const {
  publicRuntimeConfig: { appName, appHomeUrl },
} = getConfig();

interface AppConfig {
  appName: string;
  appHomeUrl: string;
}

export const getAppConfig = (): AppConfig => ({ appName, appHomeUrl });
