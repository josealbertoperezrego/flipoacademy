import React from 'react';
import { Box } from '@mui/material';

interface StudentProps {
  name: string;
  grade: string;
}

const Student: React.FC<StudentProps> = ({ name, grade }) => {
  return (
    <Box sx={{ padding: 2, border: '1px solid #ccc', borderRadius: 1 }}>
      <h2>{name}</h2>
      <p>{grade}</p>
    </Box>
  );
};

export default Student;