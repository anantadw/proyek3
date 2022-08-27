const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday'
}

// convert JavaScript object into JSON string
const bookJSON = JSON.stringify(book)

// convert JSON string into object
const bookObject = JSON.parse(bookJSON)

console.log(bookObject.title) // print: Ego is the Enemey