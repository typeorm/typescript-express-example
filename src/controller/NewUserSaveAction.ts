import {Request, Response} from "express";
import {getManager} from "typeorm";
import { User } from "../entity/User";
import * as bcrypt from 'bcrypt'
// import {Post} from "../entity/Post";
/**
 * Saves given post.
 */
export async function newUserSaveAction(request: Request, response: Response) { 
    // get a post repository to perform operations with post
    const bcryptRes = []
    const password = request.body.password
    console.log(request.body, 'body')//

    const usersRepository = getManager().getRepository(User);
    
    const hashedPassword:string = await bcrypt.hash(password, 10);
    console.log(hashedPassword, 'hashedPassword')
    // create a real post object from post json object sent over http
    // parse the password thru bcrypt and jwt

    bcryptRes.push({name:request.body.name, email:request.body.email, tel:request.body.tel, password:hashedPassword, adminStatus:0})
    const newUser = usersRepository.create(bcryptRes[0]);

    // save received post
    await usersRepository.save(newUser);

    // return saved post back
    response.send(newUser);
}