import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Teacher } from './entities/teacher.entity';
import { Student } from './entities/student.entity';
import { Class } from './entities/class.entity';
import { TeachersModule } from './teachers/teachers.module';
import { StudentsModule } from './students/students.module';
import { ClassesModule } from './classes/classes.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'school',
      entities: [Teacher, Student, Class],
      synchronize: true,
    }),
    TeachersModule,
    StudentsModule,
    ClassesModule,
  ],
})
export class AppModule {}