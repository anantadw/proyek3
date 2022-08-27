const path = require('path')
const express = require('express')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')

app.set('view engine', 'hbs')
app.set('views', viewsPath)
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('test', {
        title: 'My title',
        name: 'Andrew Mead'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})