/*

  Implement a radix sort in a function called radixSort.

  You'll probably need several functions
  
  You can implement it using a binary or decimal based bucketing but I'd recommend the decimal based buckets because
  it ends up being a lot more simple to implement.

*/

const getDigit = (number, place, longestNumber) => {
  const string = number.toString();
  const size = string.length;

  const mod = longestNumber - size;
  return string[place - mod] || 0;
}

const getLongestNumber = (nums) => {
  return nums.reduce((acc, num) => Math.max(acc, num)).toString().length;
}

function radixSort(array) {
  let items = [...array];
  const longestNumber = getLongestNumber(array);
  let place = longestNumber - 1;
  let buckets = [...Array(10)].map(() => []);
  while (place >= 0) {
    for (let num of items) {
      const digit = getDigit(num, place, longestNumber);
      buckets[digit].push(num);
    }
    items = buckets.flat();
    buckets = [...Array(10)].map(_i => []);
    place--;
  }
  return items;
}

// unit tests
// do not modify the below code
describe("radix sort", function () {
  it("should sort correctly", () => {
    const nums = [
      20,
      51,
      3,
      801,
      415,
      62,
      4,
      17,
      19,
      11,
      1,
      100,
      1244,
      104,
      944,
      854,
      34,
      3000,
      3001,
      1200,
      633
    ];
    const ans = radixSort(nums);
    expect(ans).toEqual([
      1,
      3,
      4,
      11,
      17,
      19,
      20,
      34,
      51,
      62,
      100,
      104,
      415,
      633,
      801,
      854,
      944,
      1200,
      1244,
      3000,
      3001
    ]);
  });
  it("should sort 99 random numbers correctly", () => {
    const fill = 99;
    const nums = new Array(fill)
      .fill()
      .map(() => Math.floor(Math.random() * 500000));
    const ans = radixSort(nums);
    expect(ans).toEqual(nums.sort((a, b) => a - b));
  });
});
