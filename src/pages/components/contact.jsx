import {
    Box,
  CssBaseline,
  Divider,
  Grid,
  Icon,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { orange } from "@mui/material/colors";
import EventIcon from '@mui/icons-material/Event';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PlaceIcon from '@mui/icons-material/Place';


function GetMap(){
return(
  <div className="google-map-code">
  <iframe
      src="https://www.google.com/maps/embed/v1/place?q=43+Avenue+Pierre+Semard,+Narbonne,+France&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
      width="100%"
      height="450"
      frameborder="0"
      style={{ border: 0 }}
      allowfullscreen=""
      aria-hidden="false"
      tabindex="0"
  />
</div>
)

}
export default function Contact() {
  

  return (
    <>
<Grid container spacing={2} sx={{mt:5, mr:5, ml:5}}>
        <Grid item md={3} display={{ xs: "none", md: "block" }}>
          <Typography sx={{fontWeight:300, fontSize:"1.5rem",mr:4, color:'orange', textAlign:"right"}}>Nous contacter</Typography>
        </Grid>
        <Grid item xs={12} md={9} align="center" sx={{mt:0}}>
        
        <Stack direction="row" alignItems="center" gap={1}>
           <EventIcon sx={{ color: orange[500] }}/>
          <Typography variant="body1"> Le cabinet est ouvert du lundi au vendredi de 09h00 à 12h00 et de 14h00 à 19h00 
        </Typography>
        </Stack>
        

       
          
        <Stack direction="row" alignItems="center" gap={1}>
           <LocalPhoneIcon sx={{ color: orange[500] }}/>
          <Typography variant="body1"> Téléphone : 07.68.38.72.13
        </Typography>
        </Stack>
        <Stack direction="row" alignItems="center" gap={1}>
           <LocalPhoneIcon sx={{ color: orange[500] }}/>
          <Typography variant="body1"> E-mail: cabinet@dafflon-avocat.fr
        </Typography>
        </Stack>
        <Stack direction="row" alignItems="center" gap={1}>
           <PlaceIcon sx={{ color: orange[500] }}/>
          <Typography variant="body1"> Adresse : 43, Avenue Pierre Sémard – 11100 NARBONNE
        </Typography>
        </Stack>
        </Grid>

        <Grid item md={3} display={{ xs: "none", md: "block" }}>
          <Typography sx={{fontWeight:300, fontSize:"1.5rem",mr:4, color:'orange', textAlign:"right"}}>Nous trouver</Typography>
        </Grid>
        <Grid item xs={12} md={9} sx={{mt:0}} >
          <GetMap />
          </Grid>
        
  </Grid>
    </>
  );
};

