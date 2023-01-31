import React, { useState } from 'react'
import { Box } from '@mui/system'
import { Grid, Typography } from '@mui/material'

import './Sidebar.css'
import { makeStyles } from '@mui/styles'
const useStyles = makeStyles({
 Text1: {
  borderBottom: "2px solid #449EA7",

 }
})
function AfterNavbar() {
 const [Text, setText] = useState("text1")
 const handleText = (id) => {
  setText(id)
  console.log(id)
 }
 const classes = useStyles()
 return (
  <>
   <Box className='after_nav'>
    <Grid container sx={{ display: "flex", justifyContent: "center" }}>
     <Grid item lg={11.4} md={11.4} sm={11.4} xs={11.4}>
      <Typography variant='h6' mr={4} mt={2} sx={{ color: '#449EA7' }}>שם העסק: לה פארק</Typography>

      <Box className='after_nav_links' mt={1}>

       <Box className='after_nav_links2' >
        <Typography variant='p' id="text1" className={Text === "text1" ? classes.Text1 : "sds"} onClick={() => handleText("text1")} mr={4} sx={{ fontSize: { lg: '17px', xs: "12px" } }} >שם העסק: לה פארק</Typography>
        <Typography variant='p' id="text2" mr={4} sx={{ fontSize: { lg: '17px', xs: "12px" } }} className={Text === "text2" ? classes.Text1 : "sds"} onClick={() => handleText("text2")}>שם העסק: לה פארק</Typography>
        <Typography variant='p' id="text3" mr={4} sx={{ fontSize: { lg: '17px', xs: "12px" } }} className={Text === "text3" ? classes.Text1 : "sds"} onClick={() => handleText("text3")}>שם העסק: לה פארק</Typography>
       </Box>

       <Box>
        <Typography variant='p' mr={4} sx={{ fontSize: { lg: '17px', xs: "12px" } }}>שם העסק: לה פארק</Typography>
       </Box>
      </Box>
     </Grid>
    </Grid>
   </Box>
  </>
 )
}

export default AfterNavbar;