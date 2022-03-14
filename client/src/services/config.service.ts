import getConfig from "next/config";

const {
  publicRuntimeConfig: { appName, appHomeUrl, pageSize },
} = getConfig();

interface AppConfig {
  appName: string;
  appHomeUrl: string;
  pageSize: number;
}

export const getAppConfig = (): AppConfig => ({ appName, appHomeUrl, pageSize });
