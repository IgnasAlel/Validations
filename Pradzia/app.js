const cors = require("cors")
const express = require('express')
const app = express()
app.listen(4001)
app.use(express.json())
app.use(cors())
const router = require('./router/mainRouter')
app.use('/', router)