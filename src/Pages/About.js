import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Typography } from "@mui/material";
const About = () => {
  return (

     <Layout>
         <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2 rem",
          },
          "& p": {
            textAlign: "justify",
          },


          // mobile view 
      "@media (max-width:600px)":{
        mt:0,
        "& h4":{
          fontSize:"1.5rem"
        }
      }
        }}
      >
        <Typography variant="h4">Welcome to My Restaurant</Typography>
        <p>
          Restaurants know the importance of a strong first impression. It's why
          they invest in exterior design, decorate their entranceways and train
          hosts to welcome guests with a warm smile. Nowadays, however, more
          than 70% of diners visit a restaurant's website before deciding where
          to dine, which means the first impression happens long before they set
          foot on-premises. It happens online. And when it does, the restaurant
          description plays a pivotal role. Despite this, many restaurants
          struggle to write an effective description for their website. Doing so
          requires a mix of skills not every restaurant has — writing, design
          and a keen understanding of digital user behavior — but there are
          tools in place to make the job easier. <br />
          <br/>
          <br/>For example, if you build your
          website with BentoBox, full-service designers can help create your
          website on a template that is proven to be user-friendly. That takes
          care of the design and user behavior hurdles. To help overcome the
          writing hurdle, we've created the resource below. In addition to
          defining best practices, we have curated 20 examples of effective
          restaurant descriptions and analyzed why they work. If you don't know
          where to start or feel stuck, scroll through these examples and see if
          they spark new ideas. BentoBox WEBINAR
        </p>
      </Box>
     </Layout>

    
  )
}

export default About