const express = require('express')
const path = require('path')
const port = process.env.PORT || 8080
const app = express()
require('dotenv').config()

app.use(express.static(__dirname + '/public'))

app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'index.html'))
})

app.listen(port)
