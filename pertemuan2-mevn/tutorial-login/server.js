const express = require('express')

const port = 3000
const app = express()
const bodyParser = require('body-parser') // middleware

app.use(bodyParser.urlencoded({extended: false}))

// route to home page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/static/index.html')
})

// route to login page
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/static/login.html')
})

app.post('/login', (req, res) => {
    // insert login code here
    let username = req.body.username
    let password = req.body.password

    res.send(`Username: ${username} Password: ${password}`)
})

app.listen(port, () => console.log(`This app is listening on port ${port}`))