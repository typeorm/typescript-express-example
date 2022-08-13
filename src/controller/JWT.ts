import { response } from "express";
import * as jwt  from "jsonwebtoken";


function verifyJWT(req:any, res:any, next:Function){ 
    var token = req.cookie.token
    // var token = req.body.token
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