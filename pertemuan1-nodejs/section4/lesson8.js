// const square function(x) {
//     return x * x
// }

// arrow function
const square = (x) => {
    return x * x
}

// shorthand syntax
const squareAlt = (x) => x * x

console.log(squareAlt(2)) // will print: 4

// 'this' binding
const event = {
    name:  'Birthday Party',
    guestList: ['Andrew', 'Jen', 'Mike'],
    printGuestList() {
        console.log('Guest list for ' + this.name)

        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}

event.printGuestList()