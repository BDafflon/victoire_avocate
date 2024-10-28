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
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';
import DescriptionIcon from '@mui/icons-material/Description';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

export default function Cabinet() {


  return (
    <>
      <Grid container spacing={2} sx={{ mt: 5, mr: 5, ml: 5 }}>
        <Grid item md={3} display={{ xs: "none", md: "block", }}>
          <Typography sx={{ fontWeight: 300, fontSize: "1.5rem", mr: 4, color: 'orange', textAlign: "right" }}>Le cabinet</Typography>
        </Grid>
        <Grid item xs={12} md={9} align="center" sx={{ mt: 0 }}>
          <Typography sx={{ textAlign: "justify" }}>
            Le cabinet de Maître Victoire DAFFLON a été fondé en 2016 et conseille
            les particuliers et les professionnels dans le domaine du droit pénal, du
            droit routier, du droit civil, du droit de la famille, des personnes et du droit du travail.
          </Typography>
          <Typography sx={{ textAlign: "justify", mt: 2 }}>
            Le Cabinet vous accompagne tout au long de votre dossier en assurant
            avec sérieux et réactivité votre défense devant les juridictions de première

            instance et d’appel.         </Typography>
          <Typography sx={{ textAlign: "justify", mt: 2 }}>
            les locaux sont situés à proximité du Palais de Justice de Narbonne. Les rendez-vous sont pris par téléphone ou par courrier électronique.        </Typography>

        </Grid>
        <Grid item md={3} display={{ xs: "none", md: "block" }}>
          <Typography sx={{ fontWeight: 300, fontSize: "1.5rem", mr: 4, color: 'orange', textAlign: "right" }}> </Typography>
        </Grid>
        <Grid item xs={12} md={9} align="center" sx={{ mt: 5 }}>
          <Stack direction="row" alignItems="" gap={1}>
            <SchoolIcon sx={{ color: orange[500] }} />
            <Typography sx={{ textAlign: "justify" }} variant="body1">Master I Droit privé général
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="" gap={1}>
            <SchoolIcon sx={{ color: orange[500] }} />
            <Typography sx={{ textAlign: "justify" }} variant="body1"> Master II Droit privé européen mention droit pénal international et européen
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="" gap={1}>
            <ManageSearchIcon sx={{ color: orange[500] }} />
            <Typography sx={{ textAlign: "justify" }} variant="body1">Certificat de Sciences Criminelles
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="" gap={1}>
            <AccountBalanceIcon sx={{ color: orange[500] }} />
            <Typography sx={{ textAlign: "justify" }} alignItems="center" variant="body1">Diplome Universitaire de droit routier
            </Typography>
          </Stack>

        </Grid>

        <Grid item md={3} display={{ xs: "none", md: "block" }}>
          <Typography sx={{ fontWeight: 300, fontSize: "1.5rem", mr: 4, color: 'orange', textAlign: "right" }}>Nos engagements</Typography>
        </Grid>
        <Grid item xs={12} md={9} align="center">
          <Grid container spacing={1} sx={{ mt: 0, mr: 1 }}>

            <Grid item xs={12} md={6} lg={3} align="center">
              <DomaineCard morable={false} style={{ textAlign: "center", minHeight: 70 }} domaine="" title="Réactivité" detail={["Disponible pour vous assister dans les situations d’urgence."]} />
            </Grid>
            <Grid item xs={12} md={6} lg={3} align="center">
              <DomaineCard morable={false} style={{ textAlign: "center",minHeight: 70 }} domaine="" title="Proximité" detail={["Situé à 2 minutes du Tribunal et du commissariat."]} />
            </Grid>
            <Grid item xs={12} md={6} lg={3} align="center">
              <DomaineCard  morable={false} style={{ textAlign: "center",minHeight: 70 }} domaine="" title="Mobilité" detail={["Déplacement sur tout le territoire national."]} />
            </Grid>
            <Grid item xs={12} md={6} lg={3} align="center">
              <DomaineCard morable={false} style={{ textAlign: "center",minHeight: 70 }} domaine="" title="Transparence" detail={["Etablissement d’une convention d’honoraires claire et détaillée"]} />
            </Grid>
          </Grid>


        </Grid>
      </Grid>
    </>
  );
};

