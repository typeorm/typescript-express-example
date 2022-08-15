import { Request, Response, response } from "express";
import * as jwt  from "jsonwebtoken";


function verifyJWT(req:Request, res:Response, next:Function){ 
    var token = req.cookies.token
    // var token = req.body.token
    console.log('decoded token', jwt.decode(token))
    if(!token){
      return res.status(500).send({ auth: false, message: 'Token inválido.' })
    }
  
    if (!token) 
        return res.status(401).send({ auth: false, message: 'Token não informado.' }); 

    if(jwt.verify(token, process.env.SECRET)){
        return response.status(200).send({ auth: true });
        
    }
    else res.status(500).send({ auth: false, message: 'Token inválido.'});
    next()
    // jwt.verify(token, process.env.SECRET, , { 
    //     if (!complete) 
    //         return res.status(500).send({ auth: false, message: 'Token inválido.' }); 
    //     next(); 
    // }); 
  }
  export default verifyJWT  