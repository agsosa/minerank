/**
 * Misc helper functions
 */

/**
 * formatBigNumber
 * @param num the number to format
 * @param digits the amount of digits (default: 2)
 * @returns a string with the number formatted
 * @example formatBigNumber(1_000_000, 2) // "1M"
 */
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

/**
 * isServerSide
 * @returns true if the code is running server-side
 */
export const isServerSide = () => {
  return typeof window === "undefined";
};
