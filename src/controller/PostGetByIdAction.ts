import {Request, Response} from "express";
import {Post} from "../entity/Post";
import { AppDataSource } from "../data-source";

/**
 * Loads post by a given id.
 */
export class postGetByIdAction{
    // get a single post
    static getOnePost = async (req: Request, res: Response) => {
        //const id = req.params.id;
        const post = await AppDataSource.getRepository(Post).findOneBy({ id: parseInt(req.params.id) });
        return res.json(post);
    };

    // // get a post repository to perform operations with post
    // const postRepository = getManager().getRepository(Post);

    // // load a post by a given post id
    // const post = await postRepository.findOne(request.params.id);

    // // if post was not found return 404 to the client
    // if (!post) {
    //     response.status(404);
    //     response.end();
    //     return;
    // }

    // // return loaded post
    // response.send(post);
}
