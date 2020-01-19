const express = require ('express')
const mongoose = require ('mongoose')
const cors = require ('cors')
const http = require ('http')

mongoose.connect('mongodb+srv://admin:Amor131313@borabeber-lkzbc.mongodb.net/borabeber?retryWrites=true&w=majority', {
   useNewUrlParser : true,
   useUnifiedTopology : true, 
})

const app = express()
const server = http.Server(app)

const routes = require('./routes')
const { setupWebsocket} = require ('./websocket')

setupWebsocket(server)

app.use(cors())
app.use(express.json())
app.use(routes)

server.listen(3333)