/*
   Filename: ComplexCodeExample.js
   
   Description: This code is an implementation of a specialized sorting algorithm called "Merge and Bubble Sort".
                It takes an array of integers, applies a series of complex sorting operations to showcase
                the algorithm's efficiency, and finally outputs the sorted array.

   Note: This code is intentionally complex and elaborate to demonstrate a sophisticated implementation.
*/


// Merge sort implementation
function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let resultArray = [], leftIndex = 0, rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++;
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return resultArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}


// Bubble sort implementation
function bubbleSort(array) {
  const len = array.length;
  let isSwapped;

  do {
    isSwapped = false;
    for (let i = 0; i < len - 1; i++) {
      if (array[i] > array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        isSwapped = true;
      }
    }
  } while (isSwapped);

  return array;
}


// Example usage
const unsortedArray = [9, 2, 7, 5, 3, 8, 1, 6, 4];

console.log("Unsorted array:", unsortedArray);

const mergedArray = mergeSort(unsortedArray);
console.log("Array sorted using Merge Sort:", mergedArray);

const bubbleSortedArray = bubbleSort(unsortedArray);
console.log("Array sorted using Bubble Sort:", bubbleSortedArray);

console.log("End of sorting demonstration.");