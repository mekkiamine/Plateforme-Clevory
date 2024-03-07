require('dotenv').config();

const {pool}=require('../DataBase/BD_User')

Connect=()=>{
    try{
        return pool.Connect()
    }catch(err){
        console.log('erreur :',err.stack)
    }
}
const SignUp=(req,res)=>{
    try{
        pool.connect()
        pool.query('',[],(err,result)=>{
            if(err){
                return res.status(500).send('Insertion Failed')
            }
            return res.status(200).send('User Added Succesfully')
        })
    }catch(err){
        return res.status(500).send('Insert Failed')
    }
}
const Login=(req,res)=>{
    try{
        pool=connect()
        pool.query('SELECT * FROM "user" WHERE email=$1',[req.body.email],(err,result)=>{
            if(err){
                return res.status(404).send('User not Found')
            }else{
                if(req.body.password!=result.rows[0].password){
                    return res.status(500).send('Invalid Password')
                }else{
                    const token=jwt.sign(result.rows[0],process.env.ACCESS_TOKEN)
                    res.cookie("token",token)
                    return res.status(200).send('User Logged In Succesfully')
                }

            }
        })
    }catch(err){
        return res.status(500).send({msg:"DataBase Not Working"})
    }
}
const authenticateToken=(req,res,next)=>{
    if(req.cookies){
        const access_token=req.cookie['0'];
        const auth=jwt.verify(access_token,process.env.ACCESS_TOKEN)
        if(auth){
            req.body=auth.user
            next()
        }else{
            return res.statu(403).send('Access Denied')
        }
    }
}
module.exports={}