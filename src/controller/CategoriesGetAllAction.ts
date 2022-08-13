import {Request, Response} from "express";
import {getManager} from "typeorm";
// import {Post} from "../entity/Post";
import {Category} from "../entity/Category";
/**
 * Loads all posts from the database.
 */
export async function categoriesGetAllAction(request: Request, response: Response) {

    // get a post repository to perform operations with post
    const categoriesRepository = getManager().getRepository(Category);

    // load posts
    const categories = await categoriesRepository.find();

    // return loaded product
    response.send(categories);
}
