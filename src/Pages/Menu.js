import React from 'react'
import Layout from '../components/Layout/Layout'
import {MenuList} from '../data/data'
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'

const Menu = () => {
  return (
   <Layout>
 <Box sx={{display:'flex', justifyContent:'center', flexWrap:'wrap'}}>
  {
    MenuList.map(menu=>(
      <Card sx={{maxWidth:"390px" , m:2}}>
        <CardActionArea>
          <CardMedia sx={{minHeight:'400px'}} component={'img'} src={menu.image} alt={menu.name} />

   {/* card detail  */}
   <CardContent>
    <Typography variant='h5' gutterBottom component={'div'}>
      {menu.name}
    </Typography>
    <Typography variant='body2'>
      {menu.description}
    </Typography>
    <Typography variant='price'>
      {menu.price}
    </Typography>
   </CardContent>
        </CardActionArea>
      </Card>
    ))
  }
 </Box>
   </Layout>
  )
}

export default Menu