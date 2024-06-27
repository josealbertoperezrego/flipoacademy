import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { Teacher } from './teacher.entity';
import { Student } from './student.entity';

@Entity()
export class Class {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  className: string;

  @Column()
  description: string;

  @ManyToOne(() => Teacher, (teacher) => teacher.classes)
  teacher: Teacher;

  @ManyToMany(() => Student, (student) => student.classes)
  @JoinTable()
  students: Student[];
}

