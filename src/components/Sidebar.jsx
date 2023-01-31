import React from 'react'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import sidebar1 from '../assest/side1.png'
import sidebar2 from '../assest/side2.png'
import sidebar3 from '../assest/side3.png'
import sidebar4 from '../assest/side4.png'
import sidebar5 from '../assest/side5.png'
import sidebar6 from '../assest/side6.png'
import './Sidebar.css'
import { useState } from 'react'
function Sidebar({ Toggle }) {
  const [Side, setSide] = useState('text1')
  const handleClick = (id) => {
    setSide(id)
  }
  return (
    <>
      <Box
        className='primary_sidebar'
        sx={{ display: `${Toggle ? 'none' : 'inline'}` }}
      >
        <Box className='p_sidebar_icons'>
          <span
            id='text1'
            onClick={() => handleClick('text1')}
            className={
              Side === 'text1' ? 'COLO p_sidebar_icons' : 'p_sidebar_icons'
            }
          >
            <img src={sidebar1} alt='' />
            <Typography variant='p' sx={{ fontSize: '14px' }}>
              ראשי
            </Typography>
          </span>
        </Box>

        <Box className='p_sidebar_icons' mt={5}>
          <span
            id='text2'
            onClick={() => handleClick('text2')}
            className={
              Side === 'text2' ? 'COLO p_sidebar_icons' : 'p_sidebar_icons'
            }
          >
            <img src={sidebar3} alt='' />
            <Typography variant='p' sx={{ fontSize: '14px' }}>
              משווקים
            </Typography>
          </span>
        </Box>

        <Box className='p_sidebar_icons' mt={5}>
          <span
            id='text3'
            onClick={() => handleClick('text3')}
            className={
              Side === 'text3' ? 'COLO p_sidebar_icons' : 'p_sidebar_icons'
            }
          >
            <img src={sidebar5} alt='' />
            <Typography variant='p' sx={{ fontSize: '14px' }}>
              מסופים
            </Typography>
          </span>
        </Box>

        <Box className='p_sidebar_icons' mt={5}>
          <span
            id='text4'
            onClick={() => handleClick('text4')}
            className={
              Side === 'text4' ? 'COLO p_sidebar_icons' : 'p_sidebar_icons'
            }
          >
            <img src={sidebar4} alt='' />
            <Typography variant='p' sx={{ fontSize: '14px' }}>
              מסופים
            </Typography>
          </span>
        </Box>

        <Box className='p_sidebar_icons' mt={5}>
          <span
            id='text5'
            onClick={() => handleClick('text5')}
            className={
              Side === 'text5' ? 'COLO p_sidebar_icons' : 'p_sidebar_icons'
            }
          >
            <img src={sidebar2} alt='' />
            <Typography variant='p' sx={{ fontSize: '14px' }}>
              חיובים
            </Typography>
          </span>
        </Box>

        <Box className='p_sidebar_icons' mt={5}>
          <span
            id='text6'
            onClick={() => handleClick('text6')}
            className={
              Side === 'text6' ? 'COLO p_sidebar_icons' : 'p_sidebar_icons'
            }
          >
            <img src={sidebar6} alt='' />
            <Typography variant='p' sx={{ fontSize: '14px' }}>
              הגדרות
            </Typography>
          </span>
        </Box>
      </Box>
    </>
  )
}

export default Sidebar
