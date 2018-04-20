checkPalindrome = inputString => {
  inputString2 = inputString
    .split("")
    .reverse()
    .join("");
  return inputString === inputString2 ? true : false;
};
