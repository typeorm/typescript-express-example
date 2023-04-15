import "reflect-metadata"
import { DataSource } from "typeorm"
import { Post } from "./entity/Post"
import { Category } from "./entity/Category"

// This is a sample of database connection.
// Change to your database of choice.
export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "test",
    password: "test",
    database: "test",
    synchronize: true,
    entities: [Category, Post],
    subscribers: [],
    migrations: ['src/migrations/*.ts'],
})