import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import { Teacher } from '../types';
import teacherService from '../services/teacherService';

const TeacherList: React.FC = () => {
  const [teachers, setTeachers] = useState<Teacher[]>([]);

  useEffect(() => {
    const fetchTeachers = async () => {
      const teachers = await teacherService.getTeachers();
      setTeachers(teachers);
    };
    fetchTeachers();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant="h6" fontFamily="Poppins">
                Name
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h6" fontFamily="Poppins">
                Email
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {teachers.map((teacher) => (
            <TableRow key={teacher.id}>
              <TableCell>
                <Typography fontFamily="Poppins">{teacher.name}</Typography>
              </TableCell>
              <TableCell>
                <Typography fontFamily="Poppins">{teacher.email}</Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TeacherList;