const express = require('express')

const app = express()

app.get('', (req, res) => {
    // provide HML to render in the browser
    res.send('<h1>Weather</h1>')
})

app.get('/weather', (req, res) => {
    // provide an object to send as JSON
    res.send({
        forecast: 'It is snowing',
        location: 'Indonesia'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})