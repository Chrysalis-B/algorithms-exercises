/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/

const merge = (sortedArray1, sortedArray2) => {
  const result = [];
  while (sortedArray1.length && sortedArray2.length) {
    if (sortedArray1[0] < sortedArray2[0]) {
      result.push(sortedArray1.shift());
    } else {
      result.push(sortedArray2.shift());
    }
  }
  return result.concat(sortedArray1, sortedArray2);
};

const mergeSort = (nums) => {
  if (nums.length === 1) return nums;
  else {
    const half = Math.ceil(nums.length / 2);
    const sortedFirstHalf = mergeSort(nums.slice(0, half));
    const sortedSecondHalf = mergeSort(nums.slice(half));
    return merge(sortedFirstHalf, sortedSecondHalf);
  }
};

// unit tests
// do not modify the below code
test("merge sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const ans = mergeSort(nums);
  expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
