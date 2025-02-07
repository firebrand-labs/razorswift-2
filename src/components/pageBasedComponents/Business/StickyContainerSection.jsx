'use client'

import ExtraParagraphHeading from '@/components/headingComponents/ExtraParagraphHeading'
import ParagraphHeading from '@/components/headingComponents/ParagraphHeading'
import PrimaryHeading from '@/components/headingComponents/PrimaryHeading'
import SubtitleHeading from '@/components/headingComponents/SubtitleHeading'
import { quickTalentDiscoveryData } from '@/constants/Business/businessPageData'
import CustomImage from '@/components/globalComponents/CustomImage/CustomImage'
import { Container, Grid, Stack, Box } from '@mui/material'
import { useMotionValueEvent, useScroll } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import TertiaryHeading from '@/components/headingComponents/TertiaryHeading'

const backgroundColor = ['teal', 'tomato', 'orange', 'violet']

const initialState = {
  id: 0,
  value: 0,
}

function StickyContainerSection() {
  const [childItems, setChildItems] = useState([])
  const [percentage, setpercentage] = useState(0)
  const [scrolledValue, setScrolledValue] = useState(0)
  const [scaleValue, setScaleValue] = useState(initialState)

  const cardsRef = useRef(new Array())
  const sectionRef = useRef(null)
  const { scrollY } = useScroll()

  useEffect(() => {
    for (let i = 0; i <= percentage; i++) {
      const fractionValue = (scrolledValue / 25) * 0.05

      cardsRef.current[i].dataset.value = fractionValue - i * 0.05
      cardsRef.current[i].style.transform = `scale(calc(1 - ${
        fractionValue - i * 0.05
      })) `

      setScaleValue((prev) => {
        return { id: i, value: fractionValue - i * 0.05 }
      })
    }
  }, [scrolledValue, percentage])

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const primaryCondition = latest > sectionRef.current.offsetTop
    if (primaryCondition) {
      const value =
        (latest - sectionRef.current.offsetTop) /
        (sectionRef.current.clientHeight -
          document.documentElement.clientHeight)
      const filteredValue = Math.min(100, value * 100)
      setScrolledValue(+filteredValue.toFixed(2))
      if (filteredValue < 25) {
        setpercentage(0)
      } else if (25 < filteredValue && filteredValue < 50) {
        setpercentage(1)
      } else if (50 < filteredValue && filteredValue < 75) {
        setpercentage(2)
      } else if (75 < filteredValue && filteredValue < 100) {
        setpercentage(3)
      }
    }
  })

  return (
    <section
      ref={sectionRef}
      style={{
        overflowX: 'unset',
        display: 'flex',
        gap: '40px',
        height: `calc(4 * 80vh + 350px)`,
        width: '100%',
        flexDirection: 'column',
      }}
    >
      {quickTalentDiscoveryData.pathways.map((item, i) => {
        return (
          <Container
            ref={(element) => (cardsRef.current[i] = element)}
            key={i}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'start',
              flexDirection: 'column',
              transformOrigin: 'center',
              // transition: 'transform 0.015ms ease',
              width: '100%',
              height: {
                xs: `${i === 0 ? '100vh' : '90vh'}`,
                xl: `${i === 0 ? '90vh' : '80vh'}`,
              },
              borderRadius: 4,
              backgroundColor: `${item.backgroundColor}`,
              position: 'sticky',
              top: {
                xs: `${i * 5}px`,
                md: `${i * 25}px`,
                xl: `${25 + i * 55}px`,
              },
              p: 4,
            }}
          >
            <PrimaryHeading
              variant="h2"
              sx={{ color: 'violetPalette.dark', textAlign: 'center' }}
            >
              {item.mainTitle ? item.mainTitle : ''}
            </PrimaryHeading>
            <ParagraphHeading
              sx={{
                color: 'primaryPalette.black',
                width: 'clamp(300px,60vw,900px)',
                textAlign: 'center',
                mb: 4,
              }}
            >
              {item.mainDescription ? item.mainDescription : ''}
            </ParagraphHeading>

            <Grid
              container
              spaing={2}
              alignItems="center"
              justifyContent="center"
              sx={{ width: '100%', height: '100%' }}
            >
              <Grid item xs={12} md={5}>
                <Stack
                  flexDirection="column"
                  alignItems="left"
                  justifyContent="space-between"
                >
                  <Box sx={{ alignSelf: 'center' }}>
                    <CustomImage
                      sx={{ alignSelf: 'center' }}
                      src={item.image}
                      alt={item.title}
                      width="clamp(150px, 17vw, 235px)"
                      aspectRatio="1/1"
                    />
                  </Box>
                  <TertiaryHeading sx={{ mb: 4, color: 'primary.black' }}>
                    {item.title}
                  </TertiaryHeading>
                  <SubtitleHeading>{item.description}</SubtitleHeading>
                </Stack>
              </Grid>

              <Grid item xs={12} md={7}>
                <Stack alignItems="center" justifyContent="center">
                  <CustomImage
                    alt={item.title}
                    src={item.mainImage}
                    width="clamp(300px, 40vw,600px)"
                    aspectRatio="3/2"
                    style={{ borderRadius: '16px' }}
                  />
                </Stack>
              </Grid>
            </Grid>
          </Container>
        )
      })}
    </section>
  )
}

export default StickyContainerSection
