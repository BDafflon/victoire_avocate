import {
    Box,
  Button,
  Card,
  CardActions,
  CardContent,
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
import React from "react";
import DriveEtaOutlinedIcon from '@mui/icons-material/DriveEtaOutlined';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import GavelIcon from '@mui/icons-material/Gavel';
import MoreTimeIcon from '@mui/icons-material/MoreTime';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import PolicyOutlinedIcon from '@mui/icons-material/PolicyOutlined';
import BadgeIcon from '@mui/icons-material/Badge';


function GetIcon({title}){
    if(title=="Pénal")
        return <AccountBalanceIcon sx={{ fontSize: 50, color:"black","&:hover": { color: "orange",  fontSize: 60}  }}  />
    if(title=="Routier")
        return <DriveEtaOutlinedIcon sx={{ fontSize: 50, color:"black","&:hover": { color: "orange",  fontSize: 60}  }}  />
    if(title=="Personnes")
        return <Diversity3Icon sx={{ fontSize: 50, color:"black","&:hover": { color: "orange",  fontSize: 60}  }}  />
    if(title=="Civil")
        return <GavelIcon sx={{ fontSize: 50, color:"black","&:hover": { color: "orange",  fontSize: 60}  }}  />
    if(title=="Travail")
        return <BadgeIcon sx={{ fontSize: 50, color:"black","&:hover": { color: "orange",  fontSize: 60}  }}  />
    if(title=="Réactivité")
        return <MoreTimeIcon sx={{ fontSize: 50, color:"black","&:hover": { color: "orange",  fontSize: 60}  }}  />
    if(title=="Proximité")
        return <LocationOnOutlinedIcon sx={{ fontSize: 50, color:"black","&:hover": { color: "orange",  fontSize: 60}  }}  />
    if(title=="Mobilité")
        return <MapOutlinedIcon sx={{ fontSize: 50, color:"black","&:hover": { color: "orange",  fontSize: 60}  }}  />
    if(title=="Transparence")
        return <PolicyOutlinedIcon sx={{ fontSize: 50, color:"black","&:hover": { color: "orange",  fontSize: 60}  }}  />
    

}

export default function DomaineCard({domaine, title,detail,style, morable=true}) {
    const [more, setMore] = React.useState(detail==""?true:false)

  return (
    <>
    <Box sx={{  }}>
      <Card variant="outlined" sx={{border:2, borderColor:"orange", ml:2, mr:2}}> 
            <CardContent>
            <Box>
                <GetIcon title={title} />
            </Box>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {domaine}
            </Typography>
            <Typography variant="h5" component="div">
            {title}
            </Typography>
            <Typography sx={{ mb: 1,...style }} color="text.secondary">
            {more || !morable ?(
                <>
                <List dense>
                    {
                        detail.map((d,i)=>(
                            <ListItem>
                            <ListItemText
                            key={"detail"+i}
                            sx={style}
                                primary={d}
                            />
                            </ListItem>
                        ))
                    }
                </List>
                
                </>
            ):null}
            </Typography>
            </CardContent>
            {detail=="" || !morable ?null:<CardActions>
            <Button size="small" sx={{ color:"black","&:hover": { color: "orange",} }} onClick={()=>setMore(!more)}>{more?'Moins':'Lire plus'}</Button>
              </CardActions>}
      </Card>
    </Box>
    </>
  );
};

