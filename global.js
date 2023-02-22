// Global Object

// Terminal
// node + (name of js file) = run
// control + c = stop run
// console.log(_dirname) = direct path
// console.log(_filename) = direct path + file

// console.log(global)

global.setTimeout(() => {
   console.log('in the timeout')
   clearInterval(int)
}, 3000);

const int = setInterval(() => {
   console.log('in the interval')
}, 1000);