import {Request, Response} from "express";
import {getEntityManager} from "typeorm";
import {Post} from "../entity/Post";

/**
 * Saves given post.
 */
export async function postSaveAction(request: Request, response: Response) {

    // get a post repository to perform operations with post
    const postRepository = getEntityManager().getRepository(Post);

    // create a real post object from post json object sent over http
    const newPost = postRepository.create(request.body);

    // save received post
    await postRepository.persist(newPost);

    // return saved post back
    response.send(newPost);
}