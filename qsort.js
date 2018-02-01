'use strict';

// Consider a pivot
// Consider i to keep track of left and j to keep track of right side
// While i <= j 
// Keep moving i to right, until you find element > = pivot
// Keep moving j to left until you find element < = pivot
// When i & j stops, swap elements at i and j
// When i > j, swap i with pivot

function quickSort(array, start = 0, end = array.length){
  if (start >= end) {
    return array;
  }
  // console.log('here');
  const middle = partition(array, start, end);
  // console.log('here?');
  array = quickSort(array, start, middle);
  // console.log('array after left recursion', array);
  array = quickSort(array, middle + 1, end);
  // console.log('array after right recursion', array);
  return array;
}

function partition(array, start, end){
  let pivot = array[Math.floor(end/2)];
  let j = end - 1;
  let i = start;
  while(i < j){
    if (array[i] >= pivot && array[j] <= pivot){
      swap(array, i, j);
      j--;
      i++;
    }
    else if (array[i] <= pivot) {
      i++;
    }
    else if (array[j] >= pivot){
      j--;
    }
  }
  console.log('pivot', pivot);
  swap(array, i, pivot);
  console.log('i', i);
  return i;
}

function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

module.exports = quickSort;