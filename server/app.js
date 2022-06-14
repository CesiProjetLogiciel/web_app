const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const port = 3000

const app = express()


// We are using our packages here
app.use( bodyParser.json() );

app.use(cors())

app.use(bodyParser.urlencoded({extended: true})); 

//You can use this to check if your server is working
app.get('/', (req, res)=>{
    res.send(`Welcome to your server, your listening on port: ${port}`)
})


//Start your server on a specified port
app.listen(port, ()=>{
    console.log(`Server is runing on port ${port}`)
})
