function merge(arr1, arr2){
  let arr = arr1.concat(arr2);
  console.log(arr);
  arr = arr.flat().sort();
  return arr;
}
console.log(merge([ 6, 3, 2 ], [ 4, 1, 5]));