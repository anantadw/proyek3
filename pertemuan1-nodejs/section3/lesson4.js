const validator = require('validator')

console.log(validator.isURL('https://mead.io'))
// https/mead.io : false
// https://mead.io : true