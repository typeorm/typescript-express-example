import {productGetAllAction} from "./controller/ProductGetAllAction";
import {postGetByIdAction} from "./controller/PostGetByIdAction";
import {productSaveAction} from "./controller/ProductSaveAction";
import { categoriesGetAllAction } from "./controller/CategoriesGetAllAction";
import { categoriesSaveAction } from "./controller/CategoriesSaveAction";
import { newUserSaveAction } from "./controller/NewUserSaveAction";
import verifyJWT from "./controller/JWT";
import { userLoginAction } from "./controller/UserLoginAction";
import {verifyToken} from "./controller/VerifyToken";
import { adminAccessAction } from "./controller/AdminAccessAction";
/**
 * All application routes.
 */
export const AppRoutes = [
    {
        path: 'adminAccessAction',
        method:'post',
        action: adminAccessAction
    },
    {
        path: 'verifyToken',
        method: 'post',
        action: verifyToken
    },
    {
        path: "/product",
        method: "get",
        action: productGetAllAction
    },
    {
        path: "/posts/:id",
        method: "get",
        action: postGetByIdAction
    },
    {
        path: "/product",
        method: "post",
        action: productSaveAction
    },
    {
        path:"/categories",
        method: "get",
        action: categoriesGetAllAction
    },
    {
        path:"/categories",
        method: "post",
        action: categoriesSaveAction,
    },
    {
        path:"/newUser",
        method:"post",
        action: newUserSaveAction
    },
    {
        path:"/login",
        method: "post",
        action: userLoginAction
    },
];