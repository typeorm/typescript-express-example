import {Request, Response} from "express";
import {Post} from "../entity/Post";
import { AppDataSource } from "../data-source";

/**
 * Saves given post.
 */
export class postSaveAction {
    // Create post
    static postPosts = async (req: Request, res: Response) => {
        const newPost = {
            title: req.body.title,
            text: req.body.text,
            category: req.body.category,
        }
        const post = AppDataSource.getRepository(Post).create(newPost);
        const result = await AppDataSource.getRepository(Post).save(post);
        return res.json(result)
    }

    // get a post repository to perform operations with post
    // const postRepository = getManager().getRepository(Post);

    // // create a real post object from post json object sent over http
    // const newPost = postRepository.create(request.body);

    // // save received post
    // await postRepository.save(newPost);

    // // return saved post back
    // response.send(newPost);
}