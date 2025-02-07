import React from 'react'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'
import Link from '@mui/material/Link'
import Image from 'next/image'
import homePageImagePaths from '../../../constants/ImagePaths/Homepage/homePageImagePaths'
import demosection from '@/constants/Homepage/demosection'
const DemoSection = () => {
  console.log(demosection)
  return (
    <Box
      sx={{
        lineHeight: '1.0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: { xs: '100%', sm: '', md: '' },

        justifyContent: 'center',
        padding: '40px 0',
      }}
    >
      <Box
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <Typography
          variant="h1"
          sx={{
            color: 'primary.purp',
            lineHeight: '1.0',
            fontSize: {
              xs: '25px',
              md: 'clamp(40px, 3vw, 100px)',
              lg: '100px',
            },
          }}
        >
          {demosection.title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            margin: '20px 0',
            fontSize: {
              xs: 'clamp(20px, 1.5vw, 28px)',
              md: 'clamp(20px, 1.5vw, 28px)',
              lg: '28px',
            },
          }}
        >
          {demosection.description}
        </Typography>
        <Box sx={{ display: 'flex', gap: 5 }}>
          <Box
            sx={{
              border: '2px solid',
              borderColor: 'primary.main',
              borderRadius: '200px',
              padding: '10px 20px',
              display: 'flex',
              alignItems: 'center',
              zIndex: '1',
              cursor: 'pointer',
            }}
          >
            <Link
              variant="body1"
              underline="none"
              sx={{
                fontSize: '15px',

                color: 'primary.main',
              }}
            >
              {demosection.button}
            </Link>
          </Box>
        </Box>
        <Box sx={{ marginTop: '-45px' }}>
          <Image
            alt="readytostartnew"
            style={{ width: 'clamp(350px, 54vw, 1000px)', height: 'auto' }}
            src={homePageImagePaths.readytostartnew}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default DemoSection
