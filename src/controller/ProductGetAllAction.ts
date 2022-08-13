import {Request, Response} from "express";
import {getManager} from "typeorm";
import {Product} from "../entity/Product";
import { Category } from "../entity/Category";
/**
 * Loads all posts from the database.
 */
export async function productGetAllAction(request: Request, response: Response) {

    // get a post repository to perform operations with post
    const productRepository = getManager().getRepository(Product);

    // load posts
    const product = await productRepository.find();

    // return loaded product
    response.send(product);
}
