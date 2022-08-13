import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm";
import { Category } from "./Category";

@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    productName: string;

    @Column()
    originalPrice: number;
    
    @Column()
    discount: number;

    @Column()
    photo: string;
    
    @Column()
    @ManyToOne(type => Category)
    @JoinColumn({ name: 'categoryName' })
    categoryName: Category;

}