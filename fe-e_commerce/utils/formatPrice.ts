export const formatPriceUSD = (price: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    // minimumFractionDigits: 2,
    // maximumFractionDigits: 2,
  }).format(price)
}

// export const formatPriceIDR = (price: number) => {
//   return new Intl.NumberFormat("id-ID", {
//     style: "currency",
//     currency: "IDR",
//   }).format(price)
// }
