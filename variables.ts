import { notDeepStrictEqual } from 'node:assert';

let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

//Functions
const logNumber: (i: number) => void = (i) => {
  console.log(i);
};

// when to use annotations
// 1) Function that returns the any type
const json = '{ "x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);
//coordinates.noErrorOccured

let words = ['red', 'green', 'blue'];
let foundWord = false;
for (let i = 0; i < words.length; i++) {
  if (words[i] == 'green') {
    foundWord = true;
  }
}

//3) Variables whoise type canot be inferred correctly
let numbers = [-10, 1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}


