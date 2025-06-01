console.log("Creationg Seriver Starting File ")



const express = require('express')

const app = express()

app.use('/tets',(req,res)=>{
    res.send("data comes  Form the server ")
})




app.listen(4000, () => {
  console.log(`Example app listening on port `)
})



