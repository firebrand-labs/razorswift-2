'use client'
import pathwayheads from '@/constants/Homepage/pathwayheads.js'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp'
import { Grid } from '@mui/material'
import MuiAccordion from '@mui/material/Accordion'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/system'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import * as React from 'react'
import { useState } from 'react'
import datatwo from '../../../constants/Homepage/pathwaytwo.js'

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `none`,
  '&:not(:last-child)': {
    borderBottom: '1px solid',
  },
  '&:before': {
    display: 'none',
  },
}))

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ display: 'none' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, .05)' : '#DCBDE3',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}))

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}))

const fonttitle = {
  fontWeight: 'bold',
}

const fontdes = {
  fontSize: 'clamp(15px, 1.2vw, 20px)',

  fontWeight: '500',
  height: 'clamp(75px, 5.5vw, 110px)',
}

const fontaspi = {
  fontSize: 'clamp(34px, 2.5vw, 44px)',

  fontWeight: '500',
}

const fontaspitwo = {
  fontSize: 'clamp(20px, 1.5vw, 28px)',

  fontWeight: '500',
}

const fontaspithree = {
  fontSize: 'clamp(15px, 1.2vw, 20px)',
  textDecoration: 'none',
  fontWeight: '500',
}

const accordimg = {
  width: 'clamp(280px, 21.7vw, 360px)',

  height: 'auto',
}

export default function PathwaySection() {
  const [expanded, setExpanded] = React.useState('panel0')
  const [expandedone, setExpandedone] = React.useState('panelone0')
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : null)
  }
  const handleChangeone = (panelone) => (eventone, newExpandedone) => {
    setExpandedone(newExpandedone ? panelone : null)
  }

  const [clickedId, setClickedId] = useState()
  const [content, setContent] = useState(datatwo[0])
  const [selectedItemId, setSelectedItemId] = useState(1)
  const handleTitleClick = (id) => {
    // Find the item in datatwo with a matching id
    const matchingItem = datatwo.find(
      (item) => item.id.toString() === id.toString()
    )

    setContent(matchingItem)

    setClickedId(matchingItem)
    console.log(clickedId)
    setSelectedItemId(id)
  }
  const containerVariants = {
    open: {
      opacity: 1,
      height: 'auto',
      transition: {
        opacity: { duration: 0.3 },
        height: { type: 'spring', stiffness: 100, damping: 10 },
      },
    },
    closed: {
      opacity: 0.5,
      height: 100,
      transition: {
        opacity: { duration: 0.3 },
        height: { type: 'spring', stiffness: 100, damping: 10 },
      },
    },
  }

  const firstsec = {
    offscreen: {
      opacity: 0,
      rotate: 0,
      x: -200,
    },
    onscreen: {
      opacity: [0.5, 0.6, 0.7, 0.8, 0.9, 1],
      rotate: [0, 20, -20, 20, 0],
      x: 0,
      transition: {
        type: 'spring',
        duration: 2,
        ease: 'easeInOut',
        damping: 9.8,
        stiffness: 100,
      },
    },
  }

  const secondsec = {
    offscreen: {
      opacity: 0,
      rotate: 0,
      x: -200,
    },
    onscreen: {
      opacity: [0.5, 0.6, 0.7, 0.8, 0.9, 1],
      rotate: [0, 20, -20, 20, 0],
      x: 0,
      transition: {
        type: 'spring',
        duration: 2,
        ease: 'easeInOut',
        damping: 9.8,
        stiffness: 100,
      },
    },
  }

  const thirdsec = {
    offscreen: {
      opacity: 0,
      rotate: 0,
      x: 200,
    },
    onscreen: {
      opacity: [0.5, 0.6, 0.7, 0.8, 0.9, 1],
      rotate: [0, 20, -20, 20, 0],
      x: 0,
      transition: {
        type: 'spring',
        duration: 2,
        ease: 'easeInOut',
        damping: 9.8,
        stiffness: 100,
      },
    },
  }
  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        padding: { xs: '15px', lg: '30px 0' },
        margin: '30px',
        borderRadius: '20px',
      }}
    >
      {/* first sec*/}
      <Grid sx={{ justifyContent: 'center' }} container spacing={10}>
        <Grid
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
          item
          xs={12}
          lg={6}
          xl={5}
        >
          <motion.div transition={{ staggerChildren: 1.9 }}>
            <motion.div
              variants={firstsec}
              initial={'offscreen'}
              whileInView={'onscreen'}
              viewport={{ once: true }}
            >
              <Typography
                variant="h1"
                sx={{
                  color: 'common.white',
                  marginBottom: '50px',
                  fontSize: { xs: '35px', lg: 'clamp(45px, 3.5vw, 64px)' },
                  textAlign: { xs: 'center', lg: 'left' },
                }}
              >
                RAZORSWIFT PATHWAYS
              </Typography>
            </motion.div>
          </motion.div>
          <Box>
            {pathwayheads.map((item, index) => (
              <motion.div key={index} transition={{ staggerChildren: 1.9 }}>
                <motion.div
                  variants={secondsec}
                  initial={'offscreen'}
                  whileInView={'onscreen'}
                  viewport={{ once: true }}
                >
                  <Box
                    sx={{
                      color:
                        selectedItemId === item.id ? 'white' : 'primary.lite',
                      borderBottom: index === 0 ? '2px solid white' : '',
                      paddingBottom: selectedItemId === item.id ? '' : '10px',
                      paddingTop: item.id == 2 ? '10px' : '',
                    }}
                    key={item.id}
                  >
                    <motion.div
                      variants={containerVariants}
                      initial="closed"
                      animate={selectedItemId === item.id ? 'open' : 'closed'}
                    >
                      <Box>
                        <Typography
                          style={fontaspi}
                          sx={{
                            color:
                              selectedItemId === item.id
                                ? 'white'
                                : 'primary.lite',
                            cursor: 'pointer',
                          }}
                          onClick={() => handleTitleClick(item.id)}
                        >
                          {item.title}
                        </Typography>
                        <Typography
                          style={fontaspitwo}
                          sx={{
                            color:
                              selectedItemId === item.id
                                ? 'white'
                                : 'primary.lite',
                            cursor: 'pointer',
                          }}
                          onClick={() => handleTitleClick(item.id)}
                        >
                          {item.description}
                        </Typography>
                      </Box>
                    </motion.div>
                    <Box
                      sx={{
                        display: selectedItemId === item.id ? 'block' : 'none',
                      }}
                    >
                      <Link style={fontaspithree} href={item.link}>
                        <Typography
                          style={fontaspithree}
                          sx={{
                            color: 'common.white',
                            backgroundColor: 'primary.purp',
                            width: 'fit-content',
                            padding: '5px 15px',
                            borderRadius: '50px',
                            margin: '15px 0 15px 0',
                            cursor: 'pointer',
                          }}
                        >
                          {item.button}
                        </Typography>
                      </Link>
                    </Box>
                  </Box>
                </motion.div>
              </motion.div>
            ))}
          </Box>
        </Grid>
        {/* second sec*/}
        <Grid item xs={12} lg={5} xl={5}>
          <Box sx={{}}>
            <motion.div transition={{ staggerChildren: 1.9 }}>
              <motion.div
                variants={thirdsec}
                initial={'offscreen'}
                whileInView={'onscreen'}
                viewport={{ once: true }}
              >
                {content.accord.map((item, index) => (
                  <Accordion
                    key={index}
                    sx={{
                      backgroundColor: 'primary.accord',
                      borderRadius:
                        index === 0
                          ? '40px 40px 0 0'
                          : index === content.accord.length - 1
                          ? '0px 0px 40px 40px'
                          : '0',
                      width: { xs: '100%' },
                      borderBottom: '1px solid black',
                    }}
                    expanded={expandedone === `panelone${index}`}
                    onChange={handleChangeone(`panelone${index}`)}
                  >
                    <Box sx={{ padding: '20px 0' }}>
                      <AccordionSummary
                        sx={{
                          borderRadius:
                            index === 0
                              ? '30px 30px 0 0'
                              : index === content.accord.length - 1
                              ? '0px 0px 40px 40px'
                              : '0',
                          backgroundColor: 'primary.accord',
                          height: '0px',
                        }}
                        aria-controls={`panelone${index}d-content`}
                        id={`panelone${index}d-header`}
                      >
                        <Typography
                          sx={{
                            fontSize: {
                              lg: 'clamp(25px, 2vw, 36px)',
                              md: 'clamp(22px, 2vw, 36px)',
                              sm: '20px',
                              xs: '20px',
                            },
                          }}
                          style={fonttitle}
                        >
                          {item.title}
                        </Typography>
                      </AccordionSummary>
                    </Box>
                    <AccordionDetails
                      sx={{
                        border: 'none',
                        padding: '0',
                      }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          flexDirection: 'column',
                        }}
                      >
                        <Typography
                          sx={{ padding: '10px 10px 0 20px' }}
                          style={fontdes}
                        >
                          {item.description}
                        </Typography>
                        <Box
                          sx={{
                            marginTop: { lg: '-30px' },
                            display: 'flex',

                            justifyContent: 'flex-end',
                          }}
                        >
                          <Image
                            alt="pathwayaccordianimage"
                            style={accordimg}
                            src={item.img}
                          />
                        </Box>
                      </Box>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </motion.div>
            </motion.div>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
