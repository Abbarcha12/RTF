import { Link } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import './BlueSidebar.css'

function BlueSidebar() {
 return (
  <>
   <Box >
    <div className='blue_sidebar' style={{ height: "100%" }} >
     <Link className='sidebar_link'> שם מכשיר</Link>
     <Link className='sidebar_link'> שם מכשיר</Link>
     <Link className='sidebar_link'> שם מכשיר</Link>
     <Link className='sidebar_link'> שם מכשיר</Link>
     <Link className='sidebar_link'> שם מכשיר</Link>
    </div>
   </Box>
  </>
 )
}

export default BlueSidebar