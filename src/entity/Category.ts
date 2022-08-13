import {Entity, PrimaryGeneratedColumn, Column, PrimaryColumn} from "typeorm";

@Entity()
export class Category {

    @PrimaryColumn()
    categoryName: string;

    @Column()
    photo: string;

}