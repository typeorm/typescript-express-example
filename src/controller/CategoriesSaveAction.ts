import {Request, Response} from "express";
import {getManager} from "typeorm";
import { Category } from "../entity/Category";
// import {Post} from "../entity/Post";
/**
 * Saves given post.
 */
export async function categoriesSaveAction(request: Request, response: Response) {

    // get a post repository to perform operations with post
    const categoriesRepository = getManager().getRepository(Category);
    

    console.log(request.body)

    // create a real post object from post json object sent over http
    const newCategory = categoriesRepository.create(request.body);

    // save received post
    await categoriesRepository.save(newCategory);

    // return saved post back
    response.send(newCategory);
}