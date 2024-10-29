import {
    Box,
  CssBaseline,
  Divider,
  Grid,
  Link,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { orange } from "@mui/material/colors";


 

export default function Footer({setPage}) {
  

  return (
    <>
    <Box sx={{backgroundColor:"rgb(50, 50, 50)", color:'white', mt:0, p:4}}>
    <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
 
        justifyContent: 'center',
        typography: 'h5',
        '& > :not(style) ~ :not(style)': {
          ml: 2,
         
        },
     }}>

    <Grid  container
  direction="row"
  justifyContent="center"
  alignItems="flex-start">
      <Grid xs={12} md={4}>
      <Box textAlign='center'  > 
        <Typography sx={{color:'orange'}}>Contact</Typography>
        <Typography variant="caption" gutterBottom display="block">
        - 43 Avenue Pierre Semard, 11100 Narbonne 
        </Typography>
        <Typography variant="caption" gutterBottom display="block">
        - 07.68.38.72.13
        </Typography>
        <Typography variant="caption" gutterBottom display="block">
        - cabinet@dafflon-avocat.com
      </Typography>
       
       </Box>
      </Grid>

      <Grid xs={12} md={4}>
      <Box textAlign='center'> 
        <Typography sx={{color:'orange'}}>Domaines d’intervention</Typography>
        <Typography variant="caption" gutterBottom display="block">
        - Droit pénal
        </Typography>
        <Typography variant="caption" gutterBottom display="block">
        - Droit civil
        </Typography>
        <Typography variant="caption" gutterBottom display="block">
        - Droit des personnes
      </Typography>
      <Typography variant="caption" gutterBottom display="block">
        - Droit routier
      </Typography>
      <Typography variant="caption" gutterBottom display="block">- Droit du travail </Typography>
       </Box>
      
      </Grid>
      <Grid xs={12} md={4}>
      <Box textAlign='center'> 
        <Typography sx={{color:'orange'}}>Informations Utiles</Typography>
        <Typography variant="caption" gutterBottom display="block">
        - <Link onClick={()=>setPage(4)} underline="none" sx={{ color: "white","&:hover": { color: "orange",} }} >Mentions légales </Link> 
      </Typography>
       </Box>
      </Grid>
    </Grid>
    
    
     </Box>

    </Box>

    </>

  )
}