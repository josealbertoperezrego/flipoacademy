import { Teacher } from '../types';

const teachers: Teacher[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
];

const getTeachers = async (): Promise<Teacher[]> => {

  return teachers;
};

const createTeacher = async (teacher: Teacher): Promise<void> => {

  const newTeacher = { ...teacher, id: teachers.length + 1 };
  teachers.push(newTeacher);
};

export default { getTeachers, createTeacher };