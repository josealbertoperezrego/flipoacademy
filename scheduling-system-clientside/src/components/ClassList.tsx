import React from 'react';
import { Box } from '@mui/material';

interface ClassProps {
  name: string;
  teacherName: string;
}

const Class: React.FC<ClassProps> = ({ name, teacherName }) => {
  return (
    <Box sx={{ padding: 2, border: '1px solid #ccc', borderRadius: 1 }}>
      <h2>{name}</h2>
      <p>Profesor: {teacherName}</p>
    </Box>
  );
};

export default Class;