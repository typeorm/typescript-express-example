import {Request, response, Response} from "express";
import {getManager} from "typeorm";
import { User } from "../entity/User";
import * as bcrypt from 'bcrypt'
import jwt = require('jsonwebtoken');


export async function userLoginAction(req:Request, res:Response) {
    const usersRepository = getManager().getRepository(User);
    const email  = req.body.email
    const password = req.body.password;
    const user = await usersRepository.findOne({ where:
                { email: email }
            });
    if(!user) res.status(404).send('user not found');
    const hashedPassword = user.password
    const compare = await bcrypt.compare(password, hashedPassword)
    if(compare){        
        const token = jwt.sign(user.id.toString(), process.env.SECRET, {
                                // expiresIn: 43200 // expires in 12h
                                });
                  res.cookie('token',token,{httpOnly:true})
                  if (user.adminStatus){
                    res.status(200).send({ auth: true, token: token, adminStatus: true})
                    return
                  }
                  res.status(200).send({ auth: true, token: token})  //JWT TOKEN RES test
                                return
                } 

    res.send("something went wrong!")
}
 