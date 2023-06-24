// Episode 01 && 02:

/**
 *whenever a javascript code is run "Global Execution Context is created."
 * The execution phase is created in TWO PHASE.
 * 1.Memory Creation Phase =>where it allocates the memory to variabes and function (undefined)
 * 2.Code Execution Phase
 *
 * NOTE:WHEN RETURN KEYWORD IS ENCOUNTERED ,IT RETURNS THE CONTROLS TO THE CALLED LINE AND THAT EXECUTION
 * IS DELETED.
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
