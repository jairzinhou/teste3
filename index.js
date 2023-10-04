const express=require('express')
const pool = require('./pool')

const app=express()

app.use(express.json())

app.get('/',async (req,res)=>{
    const {rows}=await pool.query('select * from carro')
    res.json(rows)
})

app.listen(3000,()=>{
    console.log('nada 2');
})
