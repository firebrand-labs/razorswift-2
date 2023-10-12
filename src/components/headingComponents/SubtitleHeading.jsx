import { Typography } from '@mui/material';
import React from 'react';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
const Paragraph = styled(Typography)(({ theme }) => ({
  fontSize: '14px',
  fontWeight: 500,
  display: 'block',
  fontFamily: theme.typography.subtitle1,
  [theme.breakpoints.up('md')]: {
    fontSize: '14px',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '16px',
  },
  [theme.breakpoints.up('xl')]: {
    fontSize: '17px',
  },
}));

function SubtitleHeading({ children, WidthFull, ...props }) {
  const [widthNum, setWidthNum] = useState('');
  useEffect(() => {
    setWidthNum(WidthFull);
    console.log('WidthFull inside SubtitleHeading:', WidthFull);
  }, [WidthFull]);
  console.log(widthNum);
  return (
    <Paragraph style={{ width: `${widthNum}` }} variant="subtitle1" {...props}>
      {children}
    </Paragraph>
  );
}

export default SubtitleHeading;
