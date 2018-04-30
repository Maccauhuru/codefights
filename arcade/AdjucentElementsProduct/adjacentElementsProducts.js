const adjacentElementsProduct = inputArray => {
  let minProductSum = 0;
  let maxProductSum = inputArray[0] * inputArray[1]; //Give max an initial value

  for (let i = 1; i < inputArray.length - 1; i++) {
    // Give min a value
    minProductSum = inputArray[i] * inputArray[i + 1];

    if (minProductSum > maxProductSum) {
      // Compare if new min > current max and replace
      maxProductSum = minProductSum;
    }
  }
  return maxProductSum;
};
