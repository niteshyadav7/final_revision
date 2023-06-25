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

// Episode 07 && 08:

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
