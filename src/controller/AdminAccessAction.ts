import { Request, Response, response } from "express";
import * as jwt  from "jsonwebtoken";



export async function adminAccessAction (req:Request, res:Response){ 
  var token = req.cookies.token
  // var token = req.body.token
  if(!token){
      res.status(500).send({ auth: false, message: 'Token inválido.' })
      return 
  }

  if (!token) {
      res.status(401).send({ auth: false, message: 'Token não informado.' }); 
      return
  }
  if(jwt.verify(token, process.env.SECRET)){
       res.status(200).send({ auth: true });
      return
  }
  res.status(500).send({ auth: false, message: 'Token inválido.'});
  
}

 