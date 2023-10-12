'use client';

import { Box, Container, Grid, Paper, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import PrimaryFillButton from '../buttonComponents/PrimaryFillButton';
import CustomImage from '../globalComponents/CustomImage/CustomImage';
import ExtraParagraphHeading from '../headingComponents/ExtraParagraphHeading';
import SecondaryHeading from '../headingComponents/SecondaryHeading';
import SubtitleHeading from '../headingComponents/SubtitleHeading';
import { useEffect, useState } from 'react';
function CareerDropDownBody({ dropDownBodyData, ...props }) {
  const [WidthFull, setWidthFull] = useState();
  const headingvalue = function (value) {
    console.log(value);
    setWidthFull(value);
    console.log(WidthFull);
  };

  console.log(WidthFull);
  return (
    <Box
      {...props}
      sx={{
        width: '100%',
        borderRadius: 6,
        backgroundColor: `${dropDownBodyData.backgroundColor}`,
        py: 2,
      }}
    >
      <Container
        sx={{
          padding: (theme) => theme.spacing(5, 0, 0, 0),
          borderRadius: 8,
          padding: '0',
        }}
      >
        <Grid
          sx={{
            padding: (theme) => ({
              xs: theme.spacing(0, 2),
              sm: theme.spacing(0, 0),
            }),
          }}
          container
          spacing={2}
          alignItems="center"
        >
          <Grid item xs={12} md={6}>
            <Stack direction="column" alignItems="start" gap={2}>
              <CustomImage
                src={dropDownBodyData.trophyImage}
                alt={dropDownBodyData.title}
                width={{ xs: '70%', md: '90%' }}
                aspectRatio="6/2"
                style={{
                  objectFit: 'unset',
                }}
              />
              <SecondaryHeading
                headingvalue={headingvalue}
                sx={{ color: 'primaryPalette.primaryBlack' }}
              >
                {dropDownBodyData.title}
              </SecondaryHeading>
              <Typography
                variant="h3"
                sx={{
                  color: 'primaryPalette.primaryBlack',
                  fontSize: 'clamp(34px,5vw,56px)',
                  color: 'primaryPalette.primaryBlack',
                  fontWeight: '600',
                }}
              >
                {dropDownBodyData.highLightedTitle}
              </Typography>
              <SubtitleHeading
                WidthFull={WidthFull}
                sx={{
                  color: 'primaryPalette.primaryBlack',
                }}
              >
                {dropDownBodyData.description}
              </SubtitleHeading>
              {dropDownBodyData.buttonData && (
                <PrimaryFillButton
                  varient="contained"
                  link="/about"
                  sx={{
                    backgroundColor:
                      dropDownBodyData.buttonData?.backgroundColor,
                    color: dropDownBodyData.buttonData?.color,
                    '&:hover': {
                      backgroundColor:
                        dropDownBodyData.buttonData?.backgroundColor,
                      color: dropDownBodyData.buttonData?.color,
                    },
                  }}
                >
                  {dropDownBodyData.buttonData?.title}
                </PrimaryFillButton>
              )}
            </Stack>
          </Grid>
          <Grid item xs={12} md={1}></Grid>
          <Grid item xs={12} md={5}>
            <Stack>
              <CustomImage
                alt={dropDownBodyData.title}
                src={dropDownBodyData.image}
                width="100%"
                aspectRatio="1/1"
                style={{
                  objectFit: 'cover',
                  borderRadius: '24px',
                }}
              />
            </Stack>
          </Grid>
        </Grid>
        <Grid
          container
          px={2}
          py={5}
          alignItems="center"
          justifyContent="space-between"
        >
          <Grid item xs={12} md={3}>
            <ExtraParagraphHeading
              style={{ fontWeight: 500 }}
              sx={{
                flexBasis: 'clamp(40px,15vw,250px)',
                mb: { xs: 2, md: 0 },
              }}
            >
              What to expect ?
            </ExtraParagraphHeading>
          </Grid>
          <Grid
            item
            xs={12}
            md={9}
            sx={{
              position: 'relative',
              '&::before': {
                content: `""`,
                position: 'absolute',
                width: '2px',
                left: '-80px',
                top: '50%',
                transform: 'translate(0,-50%)',
                height: { sm: '0%', lg: '50%' },
                backgroundColor: 'violetPalette.dark',
              },
            }}
          >
            <Grid container spacing={2}>
              {dropDownBodyData.whatToExpect.map((item) => (
                <Grid item xs={12} md={6} key={item.id}>
                  <Paper
                    sx={{
                      borderRadius: 2,
                      display: 'flex',
                      minHeight: '100%',
                      alignItems: 'center',
                      padding: 2,
                      gap: 2,
                      justifyContent: { xs: 'start', md: 'center' },
                    }}
                  >
                    <Image
                      alt={item.title}
                      src={item.image}
                      style={{ width: 'clamp(60px, 6vw, 80px)' }}
                    />

                    <Stack
                      flexDirection="column"
                      alignItems="start"
                      justifyContent="center"
                      gap="8px"
                    >
                      <ExtraParagraphHeading sx={{ fontWeight: '600' }}>
                        {item.title}
                      </ExtraParagraphHeading>
                      <SubtitleHeading>{item.description}</SubtitleHeading>
                    </Stack>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default CareerDropDownBody;
