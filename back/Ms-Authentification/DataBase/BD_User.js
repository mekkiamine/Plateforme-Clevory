const {Pool}=require('pg')

pool=new Pool({
    host:process.env.DB_HOST,
    user:process.env.DB_UserName,
    database:process.env.DB_Name,
    password:process.env.DB_Password,
    port:process.env.DB_Port,
    max:20
})