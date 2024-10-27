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
import BadgeIcon from "@mui/icons-material/Badge";

const domaineDetail = {
  Civil: [
    "Responsabilité contractuelle",
    "Baux d’habitation",
    "Troubles du voisinage",
    "Procédure de surendettement",
    "Indemnisation du préjudice corporel",
    "Mesures d’exécution",
    "Droit immobilier",
  ],
  Penal: [
    "Garde à vue et Audition libre",
    "Audience devant le Tribunal de police, correctionnel, Cour d’assises",
    "Assistance devant le Juge d’instruction",
    "Comparution immédiate",
    "Comparution sur reconnaissance préalable de culpabilité",
    "Droit du détenu",
    "Droit pénal du mineur",
    "Dépôt de plainte",
    "droit des victimes",
  ],
  Personnes: [
    "Divorce",
    "Séparation de corps",
    "Fixation des droits parentaux",
    "Contribution alimentaire",
    "Ordonnance de protection",
    "Adoption",
    "Assistance éducative",
    "Tutelle ou curatelle",
  ],
  Routier: [
    "Permis de conduire",
    "Récupération de points",
    "Alcoolémie au volant",
    "Conduite sous stupéfiants",
    "Conduite sans permis",
    "Excès de vitesse",
    "Démarches administratives",
  ],
  Travail: [
    "Procédure de licenciement",
    "Contrats de travail",
    "Assistance devant le Conseil des Prud’hommes",
    "Rupture conventionnelle",
    "Inaptitudes",
    "Rappel de salaire, heures supplémentaires",
    "Harcèlement moral",
  ],
};

export default function Domaines() {
  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{ mt: 5, ml: 5, mr: 5, backgroundColor: "white" }}
      >
        <Grid item xs={0} md={3} display={{ xs: "none", md: "block", mt: 5 }}>
          <Typography
            sx={{
              fontWeight: 300,
              fontSize: "1.5rem",
              mr: 4,
              ml: 2,
              color: "orange",
              textAlign: "right",
            }}
          >
            Domaines d’interventions
          </Typography>
        </Grid>
        <Grid item xs={12} md={9}>
          <Typography sx={{ textAlign: "justify", mt: 2 }}>
            Vous trouverez ci-après les principaux domaines d’intervention
            exercé par le Cabinet mais n’hésitez pas nous joindre pour davantage
            de renseignements.{" "}
          </Typography>
          <Grid container spacing={1} sx={{ mt: 1, mr: 1 }}>
            <Grid item xs={12} md={6} lg={4} align="center">
              <DomaineCard
                domaine="droit"
                title="Pénal"
                detail={domaineDetail["Penal"]}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4} align="center">
              <DomaineCard
                domaine="droit"
                title="Civil"
                detail={domaineDetail["Civil"]}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4} align="center">
              <DomaineCard
                domaine="droit des"
                title="Personnes"
                detail={domaineDetail["Personnes"]}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4} align="center">
              <DomaineCard
                domaine="droit"
                title="Routier"
                detail={domaineDetail["Routier"]}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4} align="center">
              <DomaineCard
                domaine="droit"
                title="Travail"
                detail={domaineDetail["Travail"]}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
