var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(arr, elem){
  return([elem,...arr])
}

function destructivelyaddElementToBeginningOfArray(arr, elem){
  return arr.unshift(elem);
}