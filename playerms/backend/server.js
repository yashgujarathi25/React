const express = require('express')
const app = express()

const bodyparser=require('body-parser')
const cors = require('cors')
const db = require('./db')
const util = require('./util')
app.use(bodyparser.json())
app.use(cors('*'))

app.get('/',(req,resp)=>{
    resp.send("Hiiii")
})

app.get('/display',(req,resp)=>{

    const query ='select * from player'
    db.query(query,(error,result)=>{
        resp.send(util.createResult(error,result))
    })

})

app.post('/search',(req,resp)=>{
    console.log(req.body)
    const { name } = req.body
    console.log(name)
    const query = `select * from player where name like '${name}%'`

    db.query(query, function(error,result){
        if(error){
            console.log(error)
        }else{
            resp.send(result)
        }
    })
})



app.listen(4000,'0.0.0.0',()=>{
    console.log("Db connected")
    console.log("Server running on port 4000")
})