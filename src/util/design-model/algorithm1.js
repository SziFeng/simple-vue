/**
 * [ 5, 7, 1, 4, 3, 6, 2, 9, 2 ]
 * 
 * 需求问题 ：求出 5 个连续元素的最大和是多少？
 * 
 * 原始的两个for循环 时间复杂度为 O(n^2)
 */

const arr = [5, 17, 1, 14, 3, 6, 22, 19, 24, 31, 6, 12, 9, 12];

const getMaxSumOfFiveContiguousElements = (arr) => {

  let maxSum = -Infinity;
  let currCount = 0;
  const list = [];

  console.time();
  for (let i = 0; i < arr.length - 5; i++) {
    currCount = 0;

    for (let k = i; k < i + 5; k++) {
      currCount += arr[k]
    }
    list.push(currCount);
    maxSum = Math.max(currCount, maxSum);
  }
  console.timeEnd();
  return maxSum;
}

console.log('最大值为1 :>> ', getMaxSumOfFiveContiguousElements(arr));
console.log('----------------------------------------------------------');


const getLargestSumOfFiveConsecutiveElements = (arr) => {
  let currSum = getSum(arr, 0, 4);
  let largestSum = currSum;

  console.time();
  for (let i = 1; i <= arr.length - 5; i++) {
    currSum -= arr[i - 1]; // subtract element to the left of curr window
    currSum += arr[i + 4]; // add last element in curr window
    largestSum = Math.max(largestSum, currSum);
  }
  console.timeEnd();

  return largestSum;
};

const getSum = (arr, start, end) => {
  let sum = 0;

  for (let i = start; i <= end; i++) {
    sum += arr[i];
  }

  return sum;
};
console.log('最大值为2 :>> ', getLargestSumOfFiveConsecutiveElements(arr));
console.log('----------------------------------------------------------');