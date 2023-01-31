import { Link } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import './BlueSidebar.css'

function BlueSidebar() {
 const [Side, setSide] = useState('text1')
 const handleClick = (id) => {
  setSide(id)
 }
 return (
  <>
   <Box >
    <div className='blue_sidebar' style={{ height: "100%" }} >
     <Link id='text1'
      onClick={() => handleClick('text1')}
      className={Side === 'text1' ? 'COLO1 sidebar_link' : 'sidebar_link'} > שם מכשיר</Link>
     <Link id='text2' onClick={() => handleClick('text2')}
      className={Side === 'text2' ? 'COLO1 sidebar_link' : 'sidebar_link'} > שם מכשיר</Link>
     <Link id='text3' onClick={() => handleClick('text3')}
      className={Side === 'text3' ? 'COLO1 sidebar_link' : 'sidebar_link'} > שם מכשיר</Link>
     <Link id='text4' onClick={() => handleClick('text4')}
      className={Side === 'text4' ? 'COLO1 sidebar_link' : 'sidebar_link'} > שם מכשיר</Link>
     <Link id='text6' onClick={() => handleClick('text6')}
      className={Side === 'text6' ? 'COLO1 sidebar_link' : 'sidebar_link'}  > שם מכשיר</Link>
    </div>
   </Box>
  </>
 )
}

export default BlueSidebar