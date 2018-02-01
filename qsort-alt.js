'use strict';

function quickSort(array, start = 0, end = array.length - 1){

  if (start >= end) {
    return array;
  }

  const middle = partition(array, start, end);

  array = quickSort(array, start, middle);
  array = quickSort(array, middle + 1, end);

  return array;
}


function partition(array, start, end){
  let pivot = Math.floor((start + end)/2);
  let j = end;
  let i = start;

  while(i <= j){
    // if (array[i] >= array[pivot] && array[j] <= array[pivot]){
    //   console.log('condition 1');
    //   swap(array, i, j);
    //   j--;
    //   i++;
    // }
    // else if (array[i] <= array[pivot]) {
    //   console.log('condition 2');
    //   i++;
    // }
    // else if (array[j] >= array[pivot]){
    //   console.log('condition 3');
    //   j--;
    // }
    while (array[i] < array[pivot]) {
      i++;
    }
    while (array[j] > array[pivot]) {
      j--;
    }
    if (i <= j) {
      swap(array, i, j);
    }
  }

  if (array[i] > array[pivot]) {
    swap(array, i, pivot );
  }

  return pivot;
}

function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
  i++;
  j++;
}

