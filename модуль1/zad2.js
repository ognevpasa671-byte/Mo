function bubbleSort(arr) {
  const result = [...arr]; 
  for (let i = 0; i < result.length - 1; i++) {
    for (let j = 0; j < result.length - 1 - i; j++) {
      if (result[j] > result[j + 1]) {
        [result[j], result[j + 1]] = [result[j + 1], result[j]]; 
      }
    }
  }
  return result;
}

console.log(bubbleSort([5, 2, 9, 1, 5, 6, 4, 41, 35])); 