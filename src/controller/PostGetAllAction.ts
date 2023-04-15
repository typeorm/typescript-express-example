import { Request, Response } from 'express'
import { AppDataSource } from '../data-source'
import { Post } from "../entity/Post";

/**
 * Loads all posts from the database.
 */
export class postGetAllAction {
    // 
// // get a post repository to perform operations with post
    static getPosts = async (req: Request, res: Response) => {
        const result = await AppDataSource.getRepository(Post).find();
        return res.json(result);
    };

    // // get a post repository to perform operations with post
    // const postRepository = getManager().getRepository(Post);

    // // load posts
    // const posts = await postRepository.find();

    // // return loaded posts
    // response.send(posts);
}
