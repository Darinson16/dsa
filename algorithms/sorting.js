// bubble sort

const n = [2, 3, 54, 5, 76, -1, 2, 2, 4, 89, 2, 1, 0, 5, 3];

function bubbleSort(a) {
  const l = a.length;
  for (let i = 0; i < l; i++) {
    for (let j = 0; j < l - i; j++) {
      if (a[j] > a[j + 1]) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
      }
    }
  }
}

// Selection Sort

function selectionSort(array) {
  const length = array.length;

  for (let i = 0; i < length - 1; i++) {
    // Set current index as minimum
    let min = i;
    let temp = array[i];

    for (let j = i + 1; j < length; j++) {
      if (array[j] < array[min]) {
        // Update minimum if current is lower that what we had previously
        min = j;
      }
    }

    array[i] = array[min];
    array[min] = temp;
  }

  return array;
}

// Insertion Sort

function insertionSort(array) {
  const length = array.length;

  for (let i = 0; i < length; i++) {
    if (array[i] < array[0]) {
      // Move number to the first position
      array.unshift(array.splice(i, 1)[0]);
    } else {
      // Find where number should go
      for (let j = 1; j < i; j++) {
        if (array[i] > array[j - 1] && array[i] < array[j]) {
          // Move number to the right spot
          array.splice(j, 0, array.splice(i, 1)[0]);
        }
      }
    }
  }

  return array;
}

// Complex Sorting

// Merge Sort
function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }

  // Split Array in into right and left
  const length = array.length;
  const middle = Math.floor(length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Quick Sort when right time comes
