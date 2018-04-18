centuryFromYear = year => {
  return Math.trunc(year / 100) + (year % 100 != 0 ? 1 : 0);
};
