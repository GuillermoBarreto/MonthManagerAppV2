// Shared currency formatter: Intl.NumberFormat handles grouping, rounding,
// and the currency symbol; toFixed(2) alone can't do any of that.
export const usd = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
