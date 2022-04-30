import {Request, Response} from "express";
import { AppDataSource } from "../data-source";
import {Post} from "../entity/Post";

/**
 * Loads all posts from the database.
 */
export async function postGetAllAction(request: Request, response: Response) {

    // get a post repository to perform operations with post
    const postRepository = await AppDataSource.manager.getRepository(Post);

    // load posts
    const posts = await postRepository.find();

    // return loaded posts
    response.send(posts);
}
