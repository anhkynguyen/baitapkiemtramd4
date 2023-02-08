import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Laptop {
    @PrimaryGeneratedColumn() 
    idLaptop : number
    @Column()
    name : string
    @Column()
    price :number
    @Column()
    brand :string
    @Column()
    quantity :number
}
