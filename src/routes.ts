import {postGetAllAction} from "./controller/PostGetAllAction";
import {postGetByIdAction} from "./controller/PostGetByIdAction";
import {postSaveAction} from "./controller/PostSaveAction";
import { Router } from "express";

/**
 * All application routes.
 */
// export const AppRoutes = [
//     {
//         path: "/posts",
//         method: "get",
//         action: postGetAllAction
//     },
//     {
//         path: "/posts/:id",
//         method: "get",
//         action: postGetByIdAction
//     },
//     {
//         path: "/posts",
//         method: "post",
//         action: postSaveAction
//     }
// ];



const AppRoutes = Router();

AppRoutes.get("/posts", postGetAllAction.getPosts);
AppRoutes.get("/post/:id", postGetByIdAction.getOnePost);
AppRoutes.post("/post", postSaveAction.postPosts);

export default AppRoutes;