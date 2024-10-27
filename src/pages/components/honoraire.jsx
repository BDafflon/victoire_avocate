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
 

 

export default function Honoraire() {
  

  return (
    <>
<Grid container spacing={2} sx={{mt:5, mr:5, ml:5}}>
        <Grid item md={3} display={{ xs: "none", md: "block" }}>
          <Typography sx={{fontWeight:300, fontSize:"1.5rem",mr:4, color:'orange', textAlign:"right"}}>Honoraire</Typography>
        </Grid>
        <Grid item xs={12} md={9} align="center" sx={{mt:0}}>
         <Typography sx={{  textAlign:"justify"}}>
         Le client est informé dès le premier rendez-vous du montant des honoraires.
          </Typography>
          <Typography sx={{ textAlign:"justify", mt:2}}>
          Les honoraires sont fixés librement par l’avocat, en accord avec le client, en fonction du temps passé, de sa situation personnelle, de la complexité de l’affaire et des diligences à effectuer.         
          </Typography>
          <Typography sx={{  textAlign:"justify", mt:2}}>
          L’intervention du cabinet impose la signature préalable d’une convention d’honoraires au sein de laquelle sont consignées les modalités de facturation telles qu’elles ont été arrêtées, d’un commun accord avec le client.
          </Typography>
         
                 
          <Typography sx={{  textAlign:"justify", mt:2}}>
          Le cabinet accepte l’aide juridictionnelle.

          </Typography>
        </Grid>
        
  </Grid>
    </>
  );
};

