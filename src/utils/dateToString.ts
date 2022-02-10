export const dateToString = (date: Date) => {
  const yearStr = date.getFullYear().toString();

  const month = date.getMonth() + 1;
  const monthStr = month < 10 ? `0${month}` : `${month}`;

  const day = date.getDate();
  const dayStr = day < 10 ? `0${day}` : `${day}`;

  const hour = date.getHours();
  const hourStr = hour < 10 ? `0${hour}` : `${hour}`;

  const minites = date.getMinutes();
  const minitesStr = minites < 10 ? `0${minites}` : `minites`;

  const seconds = date.getSeconds();
  const secondsStr = seconds < 10 ? `0${seconds}` : `seconds`;

  return `${yearStr}-${monthStr}-${dayStr} ${hourStr}:${minitesStr}:${secondsStr}`;
};
