import {Request, Response} from "express";
import {getManager} from "typeorm";
import {Post} from "../entity/Post";

/**
 * Loads post by a given id.
 */
export async function postGetByIdAction(request: Request, response: Response) {

    // get a post repository to perform operations with post
    const postRepository = getManager().getRepository(Post);

    // load a post by a given post id
    const post = await postRepository.findOne(request.params.id);

    // if post was not found return 404 to the client
    if (!post) {
        response.status(404);
        response.end();
        return;
    }

    // return loaded post
    response.send(post);
}
