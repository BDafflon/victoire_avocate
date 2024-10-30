import {
    Box,
  CssBaseline,
  Divider,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { orange } from "@mui/material/colors";
import DomaineCard from "./domainecard";
 

 

export default function Information_Utiles() {
  

  return (
    <>
<Grid container spacing={2} sx={{mt:5, mr:5, ml:5}}>
        <Grid item md={3} display={{ xs: "none", md: "block",}}>
          <Typography sx={{fontWeight:300, fontSize:"1.5rem",mr:4, color:'orange', textAlign:"right"}}>Documents utils</Typography>
        </Grid>
        <Grid item xs={12} md={9} align="center" sx={{ mt:5 }}>
            <Typography sx={{  textAlign:"justify"}}>
             
            </Typography>
        </Grid>
         
       
  </Grid>
  <Grid container spacing={2} sx={{mt:5, mr:5, ml:5}}>
        <Grid item md={3} display={{ xs: "none", md: "block",}}>
          <Typography sx={{fontWeight:300, fontSize:"1.5rem",mr:4, color:'orange', textAlign:"right"}}>Liens utils</Typography>
        </Grid>
        <Grid item xs={12} md={9} align="center" sx={{ mt:5 }}>
            <Typography sx={{  textAlign:"justify"}}>
             
            </Typography>
        </Grid>
         
       
  </Grid>
    </>
  );
};

