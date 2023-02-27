
// import from people with require()
const xyz = require('./people')

console.log(xyz.ages, xyz.people)

const os = require('os')
console.log(os.platform())

// second way to import
// const {people, ages} = require('./people')

// console.log(ages, people)