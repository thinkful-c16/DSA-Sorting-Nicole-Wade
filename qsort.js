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
//   console.log('start:', start);
//   console.log('end:', end);
  // console.log('here');
  const middle = partition(array, start, end);
  // console.log('here?');
  array = quickSort(array, start, middle);
//   console.log(array);
  console.log('middle:', middle);
  array = quickSort(array, middle + 1, end);

  return array;
}


// let dataset = [21, 2, 45, 4];

// let second round = [2, 21, 45, 4];
//21 is middle index
//j 4 is less than middle index 21
//decrements j-- so j is now 45
function partition(array, start, end){
  let pivot = Math.floor((start + end)/2);
  let j = end;
  let i = start;
  console.log('pivot:', pivot, ' j:', j, ' i:', i);
  while(i < j){
    if (array[i] >= array[pivot] && array[j] <= array[pivot]){
      console.log('condition 1');
      swap(array, i, j);
      j--;
      i++;
    }
    else if (array[i] <= array[pivot]) {
      console.log('condition 2');
      i++;
    }
    else if (array[j] >= array[pivot]){
      console.log('condition 3');
      j--;
    }
  }
//swap(array, i, pivot);
  return pivot;
}

function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

module.exports = quickSort;