'use strict';

// Consider a pivot
// Consider i to keep track of left and j to keep track of right side
// While i <= j 
// Keep moving i to right, until you find element > = pivot
// Keep moving j to left until you find element < = pivot
// When i & j stops, swap elements at i and j
// When i > j, swap i with pivot

function quickSort(array, start = 0, end = array.length - 1){

  if (start >= end) {
    return array;
  }
  console.log('start:', start);
  console.log('end:', end);
  // console.log('here');
  const middle = partition(array, start, end);
  console.log('middle:', middle);
  // console.log('here?');
  array = quickSort(array, start, middle);
  console.log(array);
  
  array = quickSort(array, middle + 1, end);
  
  return array;
}

function partition(array, start, end){
  let pivot = Math.floor(end/2);
  let j = end;
  let i = start;
  while(i < j){
    if (array[i] >= array[pivot] && array[j] <= array[pivot]){
      swap(array, i, j);
      j--;
      i++;
    }
    else if (array[i] <= array[pivot]) {
      i++;
    }
    else if (array[j] >= array[pivot]){
      j--;
    }
  }
  swap(array, i, pivot);
  return pivot;
}

function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

module.exports = quickSort;