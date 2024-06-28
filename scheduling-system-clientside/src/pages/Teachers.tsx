import React from 'react';
import TeacherList from '../components/TeacherList';
import TeacherForm from '../components/TeacherForm';
import { Box } from '@mui/material';

const Teachers: React.FC = () => {
  return (
    <Box>
      <TeacherList />
      <TeacherForm />
    </Box>
  );
};

export default Teachers;