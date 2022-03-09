import { ICommunity } from "@shared/types/entities/ICommunity";

/**
 * Returns the connection string (ip:port) of a community
 */
export function getCommunityConnectionString(community: ICommunity): string {
  if (!community) return "";

  const { port, ip } = community;
  const portStr = port ? `:${port}` : "";

  return `${ip}${portStr}`;
}

// 1500000 -> 1.5M
export function formatBigNumber(num: number, digits = 2) {
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" },
  ];

  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;

  var item = lookup
    .slice()
    .reverse()
    .find(function (elem) {
      return num >= elem.value;
    });

  return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0";
}

// Is server side
export const isServerSide = () => {
  return typeof window === "undefined";
};
