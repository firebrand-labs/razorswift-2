'use client';

import React from 'react';
import { Typography } from '@mui/material';
import styled from '@emotion/styled';
import { useEffect, useRef, useState } from 'react';
const Heading = styled(Typography)(({ theme }) => ({
  lineHeight: 1.05,
  fontSize: '24px',
  textTransform: 'capitalize',
  width: 'fit-content',
  fontWeight: 600,
  [theme.breakpoints.up('md')]: {
    fontSize: '24px',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '42px',
  },
  [theme.breakpoints.up('xl')]: {
    fontSize: '46px',
  },
}));

function SecondaryHeading({ children, ...props }) {
  const MyRef = useRef();
  const [widthNum, setWidthNum] = useState();
  useEffect(() => {
    console.log(MyRef.current.offsetWidth / 1);
    setWidthNum(MyRef.current.offsetWidth / 1);
    props.headingvalue(MyRef.current.offsetWidth / 1);
  }, [MyRef]);
  console.log(widthNum);
  return (
    <Heading ref={MyRef} variant="h3" {...props}>
      {children}
    </Heading>
  );
}

export default SecondaryHeading;
