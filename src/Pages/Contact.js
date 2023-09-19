import React from "react";
import Layout from "../components/Layout/Layout";
import { Typography, Box, TableContainer, Table, TableHead ,TableRow,TableCell, TableBody, Paper} from "@mui/material";
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
  return (
    <Layout>
      <Box sx={{ my: 5, ml: 10, "& h4": { fontWeight: "bold", mb: 2 } }}>
        <Typography variant="h4">Contact My Restaurant </Typography>
        <p>
          Hardayal, a renowned restaurant, offers an authentic culinary
          experience that blends rich flavors, cultural heritage, and warm
          hospitality. With a diverse menu spanning delectable Indian cuisine,
          from mouthwatering chaats to savory curries and fragrant biryanis,
          each dish is crafted with passion and expertise. Immerse yourself in
          the vibrant ambiance that reflects the essence of Indian traditions
          while savoring the finest quality ingredients. Whether you're seeking
          a delightful family meal, a quick snack, or catering for special
          occasions, Bikanervala promises a emorable dining experience that
          celebrates the art of Indian gastronomy Know more
        </p>
      </Box>
<Box sx={{m:3 , width:'600px',ml:'10' ,
// mobile view 
'@media (max-width:600px)':{
  width:'300px'
}
}}>
  <TableContainer component={Paper}>
<Table aria-label='contact table'>
  <TableHead>
<TableRow>
  <TableCell sx={{backgroundColor:'black',color:'white',}} align="center"  >
    Contact Details
  </TableCell>
</TableRow>
  </TableHead>

{/* table body */}

<TableBody>
  <TableRow>
    <TableCell >
    <SupportAgentIcon sx={{color:'red',pt:1}} /> 1800-45-45-45 (tollfree)
    </TableCell>
  </TableRow>


<TableRow>
  <TableCell>
    <EmailIcon sx={{color:'blue',pt:1}}/> help@myrest.com
  </TableCell>
</TableRow>
  <TableRow>
    <TableCell>
    <SupportAgentIcon sx={{color:'green',pt:1}} /> 89785864854
    </TableCell>
  </TableRow>

</TableBody>
</Table>
  </TableContainer>
</Box>


    </Layout>
  );
};

export default Contact;
