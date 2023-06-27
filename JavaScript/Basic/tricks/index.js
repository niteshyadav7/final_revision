/**
 * *Destructuring of Array
 * *Destructuring of Objects
 * *Objects literls
 * *Spreed Operator
 * *rest operator
 * *types of looping
 * 
 * map,filter,reduce
 * *concat,includes,join,find,findIndex,
 * pop,push,splice,shift,unshift,slice

 */

// Destructuring Array::

// const arr = [2, 3, 4];

// const [x, y, z] = arr;
// console.log(x, y, z);

// Destructuring Objects::

/** const obj = {
  firstName: 'Nitesh',
  lastName: 'Yadav',
  birthYear: 2000,
  fullName: () => {},
  age: function () {
    console.log(2023 - this.birthYear);
  },
};

const { firstName, lastName } = obj;
console.log(firstName,lastName);
*/

// const arr = [12, 32, 44, 54, 656, 24, 343, 54];
// const [a, b, ...rest] = arr;
// console.log(a, b, rest);

// const newArray = [1,2,...arr];
// console.log(newArray);

const arr = [12, 32, 44, 54, 656, 24, 343, 54];
// Loops

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (let i of arr) {
//   console.log(i);
// }

// Concatinating::
// const firstName = 'Nitesh';
// const lastName = 'Yadav';

// console.log(firstName.concat(lastName)); //NiteshYadav

// // includes

// const including = 'Blue Whale'.includes('Blue');
// console.log(including);

// // join

// const fruits = ['banana', 'apple', 'oranges'];
// console.log(fruits.join('-'));

// // find

// const num = [1, 2, 3, 4, 5, 6];

// const greater = num.find(element => element > 2);

// // findIndex

// const fruits1 = ['Mangoes', 'Banana', 'Apple', 'Kiwi', 'DragonFruit'];

// const indexofkiwi = element => element === 'Kiwi';
// console.log(fruits1.findIndex(indexofkiwi));

const superHero = [
  'IronMan',
  'Captain America',
  'Iron Fist',
  'Captain Marvel',
  'Thor',
  'Loki',
  'Hulk',
];
// pop && push
// superHero.push('Batman');
// superHero.pop();
// superHero.pop();
// superHero.pop();
// console.log(superHero);

// slice

console.log(superHero.slice(2));
console.log(superHero.slice(2, -1));

// splice
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]
