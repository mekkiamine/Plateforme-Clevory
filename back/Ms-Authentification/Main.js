const express=require('express')
const app=express()
const PORT=provess.env.PORT
const cors=require('cors')
const corsOptions={
    origin:'http://localhost:4200',
    methods:['GET','POST'],
    credentials:true
}
app.use(cors(corsOptions))
app.use(express.json())

app.listen(PORT,()=>{
    console.log('AuthController is Working')
})
