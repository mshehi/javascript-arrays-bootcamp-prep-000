var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(arr, elem){
  return arr.unshift(elem);
}

function destructivelyaddElementToBeginningOfArray(arr, elem){
  arr = arr.unshift(elem);
  return arr;
}