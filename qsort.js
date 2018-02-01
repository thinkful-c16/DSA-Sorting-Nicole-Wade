'use strict';

// Consider a pivot
// Consider i to keep track of left and j to keep track of right side
// While i <= j 
// Keep moving i to right, until you find element > = pivot
// Keep moving j to left until you find element < = pivot
// When i & j stops, swap elements at i and j
// When i > j, swap i with pivot

function quickSort(){}

function partition(array, start, end){
  let pivot = (array[Math.floor(array.length/2)]);
  let j = end - 1;
  let i = start;
  while(i < j){
    if (array[i] > pivot && array[j] < pivot){
      swap(array, i, j);
      j--;
      i++;
    }
    if (array[i] < pivot) {
      i++;
    }
    if (array[j] > pivot){
      j--;
    }
  }
  if(i === j){
    swap(array, i, pivot);
  }
}

function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}