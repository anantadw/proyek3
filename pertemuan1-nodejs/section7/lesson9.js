const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')
hbs.registerPartials(partialsPath)

app.set('view engine', 'hbs')
app.set('views', viewsPath)
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('lesson8', {
        title: 'My title',
        name: 'Andrew Mead'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: '404',
        errorMessage: 'Page not found.'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})