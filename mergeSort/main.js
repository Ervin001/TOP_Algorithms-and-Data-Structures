const arr = [9, 8, 7, 6, 5, 4, 3, 2, 1];

function mergeSort(arr) {
  //base case
  if (arr.length < 2) return arr;

  //arr is split in two
  let firstHalf = arr.slice(0, arr.length / 2);
  let secondHalf = arr.slice(arr.length / 2);
  // console.log(mergeSort(firstHalf));

  return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}

function merge(left, right) {
  let i = 0;
  let j = 0;
  const array = [];

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      array.push(left[i]);
      i++;
    } else {
      array.push(right[j]);
      j++;
    }
  }

  while (i < left.length) {
    array.push(left[i]);
    i++;
  }

  while (j < right.length) {
    array.push(right[j]);
    j++;
  }

  return array;
}
// mergeSort(arr);
// console.log(mergeSort(arr));
// console.log(mergeSort([212, 324, 111, 942, 142, 453, 543, 753, 754, 432]));
console.log(
  mergeSort([
    212, 324, 111, 942, 142, 453, 543, 753, 754, 432, 345, 3424, 543, 764, 432,
    764, 764, 678, 234, 876, 2443, 534, 34234, 656, 7686, 99999, 1, 23, 232,
    234, 234234234, 235, 346, 4567, 5, 7456, 8548457547345, 325, 523, 542345,
    236, 345, 34567, 345, 6, 346, 25, 43, 6534, 767, 85, 956, 896578, 65, 856,
    85, 67563, 735, 67, 4567, 4657, 46, 425, 6534, 6, 256, 2, 3232, 42, 4234,
    23, 5657, 5467, 4, 35, 32, 46, 27, 35, 735, 67, 6, 2, 6, 256, 3547, 345, 74,
    37, 568, 675, 856, 78, 56, 53, 5, 2, 233332, 32, 32, 525, 3453,
  ])
);
