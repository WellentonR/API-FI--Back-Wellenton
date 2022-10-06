import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class LC {


    @PrimaryGeneratedColumn()
    id: number

    @Column()
    goalName: string

    @Column()
    savedMoney: string

    @Column()
    goalValue: string
    
    @CreateDateColumn()
    created_at:Date;

    @UpdateDateColumn()
    updated_at:Date;

}