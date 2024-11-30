function mergeSort(arr) {
  if (arr.length === 1) return arr;

  let num = arr[0],
    index = 0;

  for (let i = 0; i < arr.length; i++) {
    if (num < arr[i + 1]) continue;
    else if (num > arr[i + 1]) (num = arr[i + 1]), (index = i + 1);
  }

  arr.splice(index, 1);

  return [num, ...mergeSort(arr)];
}

// console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1, 10, 17, 15, 27, 34, 9, 2, 6, 100]));
