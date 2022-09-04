const express = require('express')

const port = 3000
const app = express()
const bodyParser = require('body-parser') // middleware
const {check, validationResult} = require('express-validator') // include express validator functions

app.use(bodyParser.urlencoded({extended: false}))

// route to home page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/static/index.html')
})

// route to login page
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/static/login.html')
})

// validation rules
var loginValidate = [
    // check username
    check('username', 'Username must be an email address').isEmail().trim().escape().normalizeEmail(), // use sanitation
    // check password
    check('password').isLength({min: 8})
        .withMessage('Password must be at least 8 characters')
        .matches('[0-9]').withMessage('Password must contain a number')
        .matches('[A-Z]').withMessage('Password must contain an uppercase letter')
        .trim().escape()
]

// process user input
app.post('/login', loginValidate, (req, res) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(422).json({errors: errors.array()})
    } else {
        // insert login code here
        let username = req.body.username
        let password = req.body.password

        res.send(`Username: ${username} Password: ${password}`)
    }
})

app.listen(port, () => console.log(`This app is listening on port ${port}`))