// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

let arr = [1, 2, 3, 4, 5, 6, 8, 9, 7];
let target = 11;
let res = [];

arr.sort();

let start = 0;
let end = arr.length - 1;

while (start < end) {
  if (arr[start] + arr[end] == target) {
    res.push([arr[start], arr[end]]);
    start++;
  } else if (arr[start] + arr[end] < target) {
    start++;
  } else {
    end--;
  }
}
console.log(res);
