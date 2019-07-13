const express = require('express')
const bodyParser = require('body-parser')

const PORT = 3000

const app = express()
const api = require('./routes/api')
app.use(bodyParser.json())

app.use('/api', api)
app.get('/',(req,res) => {
    res.send('Hello From Server')
})
app.listen(PORT, () => {
    console.log('Server running on localhost:' +PORT)
})
 