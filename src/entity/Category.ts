import {Table, PrimaryColumn, Column} from "typeorm";

@Table()
export class Category {

    @PrimaryColumn("int", { generated: true })
    id: number;

    @Column()
    name: string;

}