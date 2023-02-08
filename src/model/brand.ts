import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Brand {
    @PrimaryGeneratedColumn()
    idBrand :string
    @Column()
    nameBrand :string
    @Column()
    Description :string
}