const range = function(start, end, step) {
  let arr = [];
  if (start === undefined || end === undefined || step === undefined) {
      return arr;
  }
  if (start > end) {
    return arr;
  }
  if (step <= 0) {
    return arr;
  }

  for (i = start; i <= end; i += step) {
    arr.push(i);
}
  return arr;
}
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));


/* // using a while loop

const range2 = function(start, end, step) {
  let arr = [];
  let i = start
  while (i <= end){
     arr.push(i);
     i += step;
  };
  return arr;
} */