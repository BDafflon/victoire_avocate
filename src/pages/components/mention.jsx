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
 

 

export default function Mention() {
  

  return (
    <>
<Grid container spacing={2} sx={{mt:5, mr:5, ml:5}}>
        <Grid item md={3} display={{ xs: "none", md: "block",}}>
          <Typography sx={{fontWeight:300, fontSize:"1.5rem",mr:4, color:'orange', textAlign:"right"}}>Mention légales</Typography>
        </Grid>
        <Grid item xs={12} md={9} align="center" sx={{ mt:5 }}>
            <Typography sx={{  textAlign:"justify"}}>
            En vertu de l’article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans
            l’économie numérique, il est précisé aux utilisateurs du site XXX l’identité des
            différents intervenants dans le cadre de sa réalisation et de son suivi :
            Maître Victoire DAFFLON, Avocat
            Siret : XXX
            43, Avenue Pierre Sémard – 11100 NARBONNE
            Le responsable publication est une personne physique ou une personne morale.
            Hébergeur : XXX
            </Typography>

        <Typography sx={{  textAlign:"justify", mt:2}}>
2. Conditions générales d’utilisation du site et des services proposés.
L’utilisation du site XXX implique l’acceptation pleine et entière des conditions
générales d’utilisation ci-après décrites. Ces conditions d’utilisation sont
susceptibles d’être modifiées ou complétées à tout moment, les utilisateurs du
site XXX sont donc invités à les consulter de manière régulière.
Ce site est normalement accessible à tout moment aux utilisateurs. Une
interruption pour raison de maintenance technique peut être toutefois décidée
par Maître Victoire DAFFLON, qui s’efforcera alors de communiquer
préalablement aux utilisateurs les dates et heures de l’intervention.
Le site XXX est mis à jour régulièrement par Maître Victoire DAFFLON. De la
même façon, les mentions légales peuvent être modifiées à tout moment : elles
s’imposent néanmoins à l’utilisateur qui est invité à s’y référer le plus souvent
possible afin d’en prendre connaissance.
</Typography>
<Typography sx={{  textAlign:"justify", mt:2}}>
3. Description des services fournis.
Le site XXX a pour objet de fournir une information concernant l’ensemble des
activités de Maître Victoire DAFFLON.
Maître Victoire DAFFLON s’efforce de fournir sur le site XXX des informations
aussi précises que possible. Toutefois, il ne pourra être tenue responsable des
omissions, des inexactitudes et des carences dans la mise à jour, qu’elles soient
de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
Tous les informations indiquées sur le XXX sont données à titre indicatif, et sont
susceptibles d’évoluer. Par ailleurs, les renseignements figurant sur le site XXX ne
sont pas exhaustifs. Ils sont donnés sous réserve de modifications ayant été
apportées depuis leur mise en ligne.
</Typography>
<Typography sx={{  textAlign:"justify", mt:2}}> 
4. Limitations contractuelles sur les données techniques.
Le site Internet ne pourra être tenu responsable de dommages matériels liés à
l’utilisation du site. De plus, l’utilisateur du site s’engage à accéder au site en

utilisant un matériel récent, ne contenant pas de virus et avec un navigateur de
dernière génération mis-à-jour.
</Typography>
​<Typography sx={{  textAlign:"justify", mt:2}}> 
5. Propriété intellectuelle et contrefaçons.
Maître Victoire DAFFLON est propriétaire des droits de propriété intellectuelle ou
détient les droits d’usage sur tous les éléments accessibles sur le site.
Toute reproduction, représentation, modification, publication, adaptation de
tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé,
est interdite, sauf autorisation écrite préalable de : Maître Victoire DAFFLON.
Toute exploitation non autorisée du site ou de l’un quelconque des éléments
qu’il contient sera considérée comme constitutive d’une contrefaçon et
poursuivie conformément aux dispositions des articles L.335-2 et suivants du
Code de Propriété Intellectuelle.
</Typography>
​<Typography sx={{  textAlign:"justify", mt:2}}> 
6. Limitations de responsabilité.
Maître Victoire DAFFLON ne pourra être tenue responsable des dommages
directs et indirects causés au matériel de l’utilisateur, lors de l’accès au site XXX,
et résultant soit de l’utilisation d’un matériel ne répondant pas aux spécifications
indiquées au point 4, soit de l’apparition d’un bug ou d’une incompatibilité.
Maître Victoire DAFFLON ne pourra également être tenue responsable des
dommages indirects (tels par exemple qu’une perte de marché ou perte d’une
chance) consécutifs à l’utilisation du site XXX.
</Typography>
<Typography sx={{  textAlign:"justify", mt:2}}> 
7. Gestion des données personnelles.
En France, les données personnelles sont notamment protégées par la loi n° 78-
87 du 6 janvier 1978, la loi n° 2004-801 du 6 août 2004, l’article L. 226-13 du Code
pénal et la Directive Européenne du 24 octobre 1995.
Ce site ne demande pas d&#39;enregistrement nominatif à ses visiteurs et ne procède
à aucun enregistrement nominatif.
8. Liens hypertextes et cookies.
Les liens hypertextes présentés sur le site en direction de ressources extérieures
ne sauraient engager la responsabilité de Maître Victoire DAFFLON.
La création de liens hypertextes vers le présent site ne peut se faire sans
l’autorisation expresse et préalable de Maître Victoire DAFFLON.
</Typography>
<Typography sx={{  textAlign:"justify", mt:2}}> 
9. Droit applicable et attribution de juridiction.
Tout litige en relation avec l’utilisation du site XXX est soumis au droit français. Il
est fait attribution exclusive de juridiction aux tribunaux compétents de Paris.
10. Les principales lois concernées.
Loi n° 78-17 du 6 janvier 1978, notamment modifiée par la loi n° 2004-801 du 6
août 2004 relative à l’informatique, aux fichiers et aux libertés.
Loi n° 2004-575 du 21 juin 2004 pour la confiance dans l’économie numérique.
          </Typography>
           
        </Grid>
         
       
  </Grid>
    </>
  );
};

