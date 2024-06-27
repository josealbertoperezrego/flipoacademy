import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Class } from './class.entity';

@Entity()
export class Teacher {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @OneToMany(() => Class, (classEntity) => classEntity.teacher)
  classes: Class[];
}