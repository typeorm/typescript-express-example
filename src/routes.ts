import {productGetAllAction} from "./controller/ProductGetAllAction";
import {postGetByIdAction} from "./controller/PostGetByIdAction";
import {productSaveAction} from "./controller/ProductSaveAction";
import { categoriesGetAllAction } from "./controller/CategoriesGetAllAction";
import { categoriesSaveAction } from "./controller/CategoriesSaveAction";
/**
 * All application routes.
 */
export const AppRoutes = [
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
        action: categoriesSaveAction
    }
];