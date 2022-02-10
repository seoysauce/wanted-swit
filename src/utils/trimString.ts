export const trimString = (str: string, num: number) => {
  if (str.length > num) return `${str.slice(0, num - 1)}...`;
  return str;
};
