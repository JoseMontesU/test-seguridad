import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('tokens')
export class Token {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'int'})
    token: number;

    @CreateDateColumn({ name: 'created_at', default: new Date() })
    createdAt: Date;
}