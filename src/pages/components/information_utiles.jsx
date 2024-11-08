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

import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import SummarizeIcon from '@mui/icons-material/Summarize';
import LaunchIcon from '@mui/icons-material/Launch';

const links = [
  { text: 'Dossier d’aide juridictionnelle', url: 'https://www.formulaires.service-public.fr/gf/cerfa_16146.do', icon: <SummarizeIcon />, type: 'document' },
  { text: 'Notice pour remplir le dossier d’aide juridictionnelle', url: 'https://www.formulaires.service-public.fr/gf/getNotice.do?cerfaNotice=52283&cerfaFormulaire=16146', icon: <LaunchIcon />, type: 'lien' },
  { text: 'Demande d’acte d’état civil', url: 'https://www.service-public.fr/particuliers/vosdroits/N359', icon: <LaunchIcon />, type: 'lien' },
  { text: 'Attestation de témoin', url: 'https://www.formulaires.service-public.fr/gf/cerfa_11527.do', icon: <SummarizeIcon />, type: 'document' },
  { text: 'Attestation d’hébergement', url: 'https://www.service-public.fr/simulateur/calcul/AttestationHebergement', icon: <LaunchIcon />, type: 'lien' },
  { text: 'Déclaration sur l’honneur de vos charges et ressources', url: 'https://www.cours-appel.justice.fr/sites/default/files/2018-11/déclaration-sur-lhonneur-art.272-CCiv.pdf', icon: <SummarizeIcon />, type: 'document' },
  { text: 'Formulaire d’information des enfants mineurs', url: 'https://www.cours-appel.justice.fr/sites/default/files/2019-04/formulaire%20d%27information%20des%20enfants%20mineurs.pdf', icon: <SummarizeIcon />, type: 'document' },
  { text: 'Demande d’extrait de casier judiciaire', url: 'https://www.formulaires.service-public.fr/gf/cerfa_10071.do', icon: <SummarizeIcon />, type: 'document' },
  { text: 'Demande de permis de visite d’un détenu', url: 'https://www.formulaires.service-public.fr/gf/cerfa_13960.do', icon: <SummarizeIcon />, type: 'document' },
  { text: 'Guide du détenu arrivant', url: 'https://www.justice.gouv.fr/sites/default/files/migrations/portail/art_pix/Guide_Je_suis_en_detention_V8_A5_Novembre2019_opt.pdf', icon: <SummarizeIcon />, type: 'document' },

];


export default function Information_Utiles() {


  return (
    <>
      <Grid container spacing={2} sx={{ mt: 5, mr: 5, ml: 5 }}>
        <Grid item md={3} display={{ xs: "none", md: "block", }}>
          <Typography sx={{ fontWeight: 300, fontSize: "1.5rem", mr: 4, color: 'orange', textAlign: "right" }}>Documents utiles</Typography>
        </Grid>
        <Grid item xs={12} md={9} align="center" sx={{ mt: 0 }}>
          <Typography sx={{ textAlign: "justify" }}>
            Afin de faciliter vos démarches et éventuellement de compléter votre dossier, nous vous proposons de retrouver sur cette page un certain nombre de liens utiles.
          </Typography>
          <Typography sx={{ textAlign: "justify" }}>
            <List>
              {links.filter(link => link.type === 'document').map((link, index) => (
                <ListItem key={index} disablePadding>
                  <ListItemButton component={Link} href={link.url} underline="none">
                    <ListItemIcon sx={{ color: orange[500] }}>{link.icon}</ListItemIcon>
                    <ListItemText primary={link.text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Typography>
        </Grid>


      </Grid>
      <Grid container spacing={2} sx={{ mt: 5, mr: 5, ml: 5 }}>
        <Grid item md={3} display={{ xs: "none", md: "block", }}>
          <Typography sx={{ fontWeight: 300, fontSize: "1.5rem", mr: 4, color: 'orange', textAlign: "right" }}>Liens utiles</Typography>
        </Grid>
        <Grid item xs={12} md={9} align="center" sx={{ ml: 0 }}>
          
          <Typography sx={{ textAlign: "justify" }}>
          <List>
              {links.filter(link => link.type === 'lien').map((link, index) => (
                <ListItem key={index} disablePadding>
                  <ListItemButton component={Link} href={link.url} underline="none">
                    <ListItemIcon sx={{ color: orange[500] }}>{link.icon}</ListItemIcon>
                    <ListItemText primary={link.text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Typography>
        </Grid>


      </Grid>
    </>
  );
};

