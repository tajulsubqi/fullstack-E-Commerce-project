// meringkas teks
export const Truncatetext = (str: string) => {
  if (str.length < 25) return str
  return str.substring(0, 25) + "..."
}

export const TruncateDescription = (str: string) => {
  if (str.length < 50) return str
  return str.substring(0, 50) + "..."
}


