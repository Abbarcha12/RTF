import React from 'react'
import './Topbar.css'
import { Box, Typography } from '@mui/material'
import menu from '../assest/menu.png'
import Logo from '../assest/logo.png'
import PDF from '../assest/ped.png'
import Search from '../assest/search.png'
import XLS from '../assest/xls.png'
import Print from '../assest/print.png'
import { Link } from 'react-router-dom'
const Topbar = ({ HandleToggle }) => {
  return (
    <Box
      sx={{
        height: '53px',
        display: 'flex',
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: '0px 0px 10px #0000001A',
        padding: '0px 15px',
      }}
    >
      <Box sx={{ display: 'flex' }}>
        <Link to='#' onClick={HandleToggle}>
          <img
            src={menu}
            style={{ marginTop: '8px', height: '20px' }}
            alt='Menu'
          />
        </Link>
        <Typography
          sx={{
            mx: '1.5rem',
            fontSize: { lg: '24px', xs: '13px' },
            display: { lg: 'block', xs: 'none' },
          }}
        >
          מערכות ניהול
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ display: 'flex' }}>
          <Box
            sx={{
              margin: '0 5px',
              borderLeft: '1px solid black',
              height: { lg: '28px', xs: '28px' },
              width: '35px',
            }}
          >
            <img src={Search} alt='d' className='IconImage' />
          </Box>
          <Box
            sx={{
              margin: '0 5px',
              borderLeft: '1px solid black',
              height: { lg: '28px', xs: '28px' },
              width: '35px',
            }}
          >
            <img src={Print} alt='' className='IconImage' />
          </Box>
          <Box
            sx={{
              margin: '0 5px',
              borderLeft: '1px solid black',
              height: { lg: '28px', xs: '28px' },
              width: '35px',
            }}
          >
            <img src={XLS} alt='' className='IconImage' />
          </Box>
          <Box
            className='TopbarIcons'
            sx={{
              margin: '0 5px',
              borderLeft: '1px solid black',
              height: { lg: '28px', xs: '28px' },
              width: '35px',
            }}
          >
            <img src={PDF} alt='' className='IconImage' />
          </Box>
          <Typography
            variant='p'
            sx={{
              lg: { fontSize: '18px' },
              sm: { fontSize: '10px' },
              mx: '25px',
              mt: ' 5px',
              display: { lg: 'block', xs: 'none' },
            }}
          >
            שלום ארז עטיה
          </Typography>
        </Box>
        <Box>
          <img src={Logo} alt='logo' style={{ height: '30px' }} />
        </Box>
      </Box>
    </Box>
  )
}

export default Topbar
