// Episode 01 && 02:

/**
 *whenever a javascript code is run "Global Execution Context is created."
 * The execution phase is created in TWO PHASE.
 * 1.Memory Creation Phase =>where it allocates the memory to variabes and function (undefined)
 * 2.Code Execution Phase
 *
 * NOTE:WHEN RETURN KEYWORD IS ENCOUNTERED ,IT RETURNS THE CONTROLS TO THE CALLED LINE AND THAT EXECUTION
 * IS DELETED.
 * IF NO MORE CODE IN LOCAL EXECUTION THEN LEC IS REMOVED FROM FROM CALL STACK.
 *
 */

/** 
var n = 2;
function square(num) {
  var ans = num * num;
  return ans;
}

var square2 = square(n);
var square4 = square(4);
console.log(square2, square4);
*/

// Episode 03 && 04:

/**
 * HOISTING :: This is the phenomenon,which enables us to extract values of variables and functions even before initialising/assigning value without getting error and this is happening due to the 1st phase (memory creation phase) of the Execution Context.
 */

/**
getName();
console.log(x);
var x = 4;
function getName() {
  console.log("Namaste JavaScript!");
}

getName();//gives "Namaste JavaScript!"
console.log(x);//reference error:x is not defined
function getName() {
  console.log("Namaste JavaScript!");
}

getName();//Uncaught TypeError:getName is not a function
console.log(x);
var x = 4;
var getName=()=>{
  console.log("Namaste JavaScript!");
}

NOTE:: getName is acts like the variables and while memory creation phase it's store the "undefined".
 */

/** 
var x = 1;
a();
b();

function a() {
  var x = 10;
  console.log(x);
  //   return x;
}

function b() {
  var x = 100;
  console.log(x);
  //   return x;
}
*/

// Episode 05 && 06:

/**
 * AT GLOBAL LEVEL "window===this"
 *
 * var x=34;
 * console.log(x)//34
 * console.log(this.x)/34
 * console.log(window.x)//34
 *
 * NOTE::undefined!==not defined
 * "undefined" occurs during the memory creation phase.
 * "not defined" occurs when no value is not defined.
 * console.log(x);//undefined
 * console.log(a);//a is not defined
 * var x=23;
 */

// Episode 07:

/**
SCPOE::
{
  var a = 12;
  let b = 23;
  const c = 54;
}
console.log(a); //a=12
console.log(b); //b && c is not defined bze let is the block scope
console.log(c);
 */

/**
 * Scope Chain and Lexical Environment::
 * NOTE:: A FUNCTION CAN ACCESS THE GLOBAL EXECUTION BUT GLOBAL EXECUTION CAN'T ACCESS THE LOCAL EXECTION CONTEXT.
 * TECHNICAL TERMS:: To summarize the above points in terms of execution context:
 * call_stack = [GEC, a(), c()]
 * Now lets also assign the memory sections of each execution context in call_stack.
 * c() = [[lexical environment pointer pointing to a()]]
 * a() = [b:10, c:{}, [lexical environment pointer pointing to GEC]]
 * GEC =  [a:{},[lexical_environment pointer pointing to null]]
 */

/** 
function a() {
  c();
  function c() {
    var b = 100;
    console.log(b); // 100
  }
}
var b = 10;
a();

IMPORTANT TERMS:: LEXICAL ENVIRONMENT AND CHAIN , SCOPE CHAIN
*/

// Episode 08:

/**
 *NOTE:: ACTUALLY LET & CONST ARE HOISTED BUT IN DIFFERENT LOCATION UNLIKE VAR .
 * VAR VARIABLES ARE HOISTED IN "GLOBAL SPACE" .
 * WHILE LET AND CONST ARE HOISTED IN "SOME SCRIPT SPACE"
 * YOU CAN ACCESS GLOBAL BY "window or this" but not script space.
 *
 * Temporal Dead Zone : Time since when the let variable was hoisted until it is initialized some value.
 * Reference Error are thrown when variables are in temporal dead zone.
 *
 * let a = 1;
 * var b = 2;
 * console.log(window.a);//refernce error
 * console.log(window.b);
 */

// TYPE OF ERROR::

// 1.Uncaught ReferenceError:x is not defined
// console.log(x);

// 2.Uncaught ReferenceError:Cannot access 'x' before initialization
// console.log(x);
// let x=2;

// 3.Uncaught SyntaxError:Identifier 'a' has already been declared
// let a=1;
// let a=2;

// 4.Uncaught SyntaxError:Missing initializer in const declaration
// const a=;

// 5.Uncaught TypeError:Assignment to constant variable
// const a=23
// a=42;

// var a = 100;
// {
//     var a = 10; // same name as global var
//     let b = 20;
//     const c = 30;
//     console.log(a); // 10
//     console.log(b); // 20
//     console.log(c); // 30
// }
// console.log(a); //

// let x=2;
// (function a(){
//     var x=23;
// }())
// console.log(x);

// Episdoe 09:

/**
 * var is the GLOBAL SCOPE and FUNCTION SCOPE(i.e:it's var variables are only accessible in within the function.)
 * let and const are the BLOCK SCOPE.
 *
 */

// SHADOWING:
/** 
var a = 34;
{
  var a = 44;
  console.log(a);//44
}
console.log(a);// 44
*/

// Illegal Shadowing:
/** 
let a=2;
{
    var a=3;
}
console.log(a);
*/

// Episode 10:

// Closure:: A closure is a function that has access to its outer function scope even after the function has returned. Meaning, A closure can remember and access variables and arguments reference of its outer function even after the function has returned.
/** 
function z() {
  var b = 900;
  function x() {
    var a = 7;
    function y() {
      console.log(a, b);
    }
    y();
  }
  x();
}
z(); // 7 900
*/

// Episode 11:

// setTimeOut::

// Example 01::

/**
function x() {
  console.log("Namaste javaScript! Before");
  setTimeout(() => {
    console.log("Namaste javaScript! ");
  }, 3000);
  console.log("Namaste javaScript! After");
}
x();
 */
// 6 6 6 6 6 6

// Print 1 after 1 sec, 2 after 2 sec till 5 : Tricky interview question

/** 
for (var i = 1; i <= 5; i++) {
  function close(i) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
  close(i);
}
console.log("Hello ");
*/
// 1 2 3 4 5

// CURRING::Currying in JavaScript transforms a function with multiple arguments into a nested series of functions, each taking a single argument. Currying helps you avoid passing the same variable multiple times, and it helps you create a higher order function.

// function x(a) {
//   return function y(b) {
//     return function z(c) {
//       return a + b + c;
//     };
//   };
// }
// console.log(x(1)(2)(3));

