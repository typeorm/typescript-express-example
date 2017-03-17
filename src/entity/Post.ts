import {Table, PrimaryColumn, Column, ManyToMany, JoinTable} from "typeorm";
import {Category} from "./Category";

@Table()
export class Post {

    @PrimaryColumn("int", { generated: true })
    id: number;

    @Column()
    title: string;

    @Column("text")
    text: string;

    @ManyToMany(type => Category, {
        cascadeInsert: true
    })
    @JoinTable()
    categories: Category[];

}