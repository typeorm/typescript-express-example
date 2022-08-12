import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

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

}