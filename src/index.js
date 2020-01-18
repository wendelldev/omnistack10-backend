const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const http = require('http')
const cors = require('cors')
const { setupWebSocket } = require('./websocket')

const { user, senha_db, mongo_db } = require('../infos-db')

const app = express()
const server = http.Server(app)

setupWebSocket(server)

mongoose.connect(`mongodb+srv://${user}:${senha_db}@cluster0-xzsct.mongodb.net/${mongo_db}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(cors())
app.use(express.json())
app.use(routes)

server.listen(3333)
