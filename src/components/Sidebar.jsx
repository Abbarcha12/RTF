import React from 'react'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import sidebar1 from '../assest/side1.png'
import sidebar2 from '../assest/side2.png'
import sidebar3 from '../assest/side3.png'
import sidebar4 from '../assest/side4.png'
import sidebar5 from '../assest/side5.png'
import sidebar6 from '../assest/side6.png'

function Sidebar({ Toggle }) {
  return (
    <>
      <Box
        className='primary_sidebar'
        sx={{ display: `${Toggle ? 'none' : 'inline'}` }}
      >
        <Box className='p_sidebar_icons'>
          <img src={sidebar1} alt='' />
          <Typography variant='p' sx={{ fontSize: '14px' }}>
            ראשי
          </Typography>
        </Box>

        <Box className='p_sidebar_icons' mt={5}>
          <img src={sidebar3} alt='' />
          <Typography variant='p' sx={{ fontSize: '14px' }}>
            משווקים
          </Typography>
        </Box>

        <Box className='p_sidebar_icons' mt={5}>
          <img src={sidebar5} alt='' />
          <Typography variant='p' sx={{ fontSize: '14px' }}>
            מסופים
          </Typography>
        </Box>

        <Box className='p_sidebar_icons' mt={5}>
          <img src={sidebar4} alt='' />
          <Typography variant='p' sx={{ fontSize: '14px' }}>
            מסופים
          </Typography>
        </Box>

        <Box className='p_sidebar_icons' mt={5}>
          <img src={sidebar2} alt='' />
          <Typography variant='p' sx={{ fontSize: '14px' }}>
            חיובים
          </Typography>
        </Box>

        <Box className='p_sidebar_icons' mt={5}>
          <img src={sidebar6} alt='' />
          <Typography variant='p' sx={{ fontSize: '14px' }}>
            הגדרות
          </Typography>
        </Box>
      </Box>
    </>
  )
}

export default Sidebar
