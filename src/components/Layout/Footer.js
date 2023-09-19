import React from 'react'
import { Typography,Box } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Footer = () => {
  return (
   <>
    <Box sx={{textAlign:"center", bgcolor:"#1a1a1a", color:"white", p:3}}>

<Box sx={{my:3 ,
"& svg":
{fontSize:'60px',
cursor:'pointer',
mr:2,
} ,
"& svg:hover":{
    color:'goldenrod',
    transform:'translateX(5px)',
    transition:'all 400'
}
}}>
    <InstagramIcon />
    <TwitterIcon/>
    <GitHubIcon/>
    <YouTubeIcon />
</Box>

        <Typography variant='h5' sx={{
            "@media ( max-width:600px)":{
                fontSize: "1rem"
            },
        }} >
            All Rights Reserved ©: Jainendra Mishra
        </Typography>
    </Box>
   </>
  )
}

export default Footer