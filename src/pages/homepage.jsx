import {
  Box,
  Button,
  CssBaseline,
  Divider,
  Grid,
  Link,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import { orange } from "@mui/material/colors";
import Footer from "./components/footer";
import Cabinet from "./components/cabinet";
import React, { useEffect } from "react";
import Domaines from "./components/domaines";
import Honoraire from "./components/honoraire";
import Contact from "./components/contact";
import Mention from "./components/mention";
import { useParams } from "react-router-dom";
import Information_Utiles from "./components/information_utiles";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";





function GetTitle({ page }) {
  if (page == 0) return <>{"Le Cabinet"}</>;
  if (page == 1) return <>{"Domaines de compétences"}</>;
  if (page == 2) return <>{"Honoraires"}</>;
  if (page == 3) return <>{"Contact"}</>;
}
export default function HomePage({ page_id }) {

  const [page, setPage] = React.useState(0);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
 
 

  useEffect(() => {
    if (page_id == "lecabinet") setPage(0);
    if (page_id == "domainesdecompetences") setPage(1);
    if (page_id == "honoraire") setPage(2);
    if (page_id == "contact") setPage(3);
    if (page_id == "mention") setPage(4);
    if (page_id == "information") setPage(5);
 
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
    <Helmet>
      <title>Victoire Dafflon - Avocate - Narbonne </title>
      <meta name="description" content={"site web de victoire dafflon, "+page_id }/>
      <meta property="og:title" content="Victoire Dafflon - Avocate - Narbonne" />
      <meta property="og:description" content="site web de victoire dafflon" />
      <link rel="canonical" href={"https://dafflon-avocat.com/?"+page_id} />
    </Helmet>
      <CssBaseline />
      <Box sx={{ height: "100vh" }}>
      <Box
      sx={{
        maxHeight: "350px",
        height: "350px",
        width: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Image */}
      <Box
        component="img"
        src="./img/narbonne7.png"
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          opacity: 0.5,
        }}
        alt="Background"
      />

      {/* Logo Image */}
      <Box
        component="img"
        src="./img/logo_vic2.png"
        sx={{
          position: "absolute",
          top: "50%", // Centrage vertical
          left: "50%", // Centrage horizontal
          transform: "translate(-50%, -50%)",
          maxWidth: "350px", // Limite la largeur maximale à 15% de la largeur de la fenêtre
          minWidth: "100px", // Largeur minimale de 100px pour s'assurer qu'il ne devienne pas trop petit
          maxHeight: "150px", // Limite la hauteur maximale
          width: "auto",
          height: "auto",
          objectFit: "contain",
          zIndex: 1,
        }}
        alt="Logo"
      />
    </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",

            backgroundColor: "white",
            justifyContent: "center",
            typography: "h5",
            "& > :not(style) ~ :not(style)": {
              ml: 2,
            },
          }}
        >
          <Grid container spacing={2}>
            <Grid 
              item
              xs={0}
              md={3}
              display={{ xs: "none", sm: "block" }}
            ></Grid>
            <Grid item xs={0} md={3} display={{ xs: "block", sm: "none" }}>
              <div>
                <Button
                  sx={{ ml: 5 }}
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  <Typography sx={{ color: "black" }}>Menu</Typography>
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem
                    onClick={() => {
                      handleClose();
                      setPage(0);
                    }}
                  >
                    Le cabinet
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      handleClose();
                      setPage(1);
                    }}
                  >
                    Domaines d’interventions
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      handleClose();
                      setPage(2);
                    }}
                  >
                    Honoraire
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      handleClose();
                      setPage(3);
                    }}
                  >
                    Contact
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      handleClose();
                      setPage(5);
                    }}
                  >
                    Documents utils
                  </MenuItem>
                </Menu>
              </div>
            </Grid>
            <Grid item xs={6} md={3} display={{ xs: "block", sm: "none" }}>
              <Typography
                sx={{
                  fontWeight: 300,
                  fontSize: "1.5rem",
                  mr: 4,
                  color: "orange",
                  textAlign: "right",
                }}
              >
                <GetTitle page={page} />
              </Typography>
            </Grid>
            <Grid item xs={12} md={9} display={{ xs: "none", sm: "block" }}>
              <Stack
                direction="row"
                justifyContent="space-around"
                alignItems="center"
                sx={{
                  fontWeight: 300,
                  mt: 1,
                  mb: 1,
                  textTransform: "uppercase",
                  fontSize: "large",
                }}
              >
                <Link
                style={{ cursor: 'pointer' }}
                  underline="none"
                  sx={{
                    color: page == 0 ? "orange" : "black",
                    "&:hover": { color: "orange" },
                  }}
                  onClick={() => setPage(0)}
                >
                  Le cabinet
                </Link>
                <Link
                style={{ cursor: 'pointer' }}
                  underline="none"
                  sx={{
                    color: page == 1 ? "orange" : "black",
                    "&:hover": { color: "orange" },
                  }}
                  onClick={() => setPage(1)}
                >
                  Domaines d’interventions
                </Link>
                <Link
                style={{ cursor: 'pointer' }}
                  underline="none"
                  sx={{
                    color: page == 2 ? "orange" : "black",
                    "&:hover": { color: "orange" },
                  }}
                  onClick={() => setPage(2)}
                >
                  Honoraires
                </Link>
                <Link
                style={{ cursor: 'pointer' }}
                  underline="none"
                  sx={{
                    color: page == 3 ? "orange" : "black",
                    "&:hover": { color: "orange" },
                  }}
                  onClick={()=>setPage(5)}
                >
                  Contact
                </Link>
              </Stack>
            </Grid>
          </Grid>
        </Box>
        <Divider />
        <Box
          sx={{
            display: "flex",
            pb: 4,
            flexWrap: "wrap",
            backgroundColor: "white",
            typography: "body1",
            "& > :not(style) ~ :not(style)": {
              ml: 2,
            },
          }}
        >
          {page == 0 ? <Cabinet /> : null}

          {page == 1 ? <Domaines /> : null}

          {page == 2 ? <Honoraire /> : null}

          {page == 3 ? <Contact /> : null}

          {page == 4 ? <Mention /> : null}

          {page == 5 ? <Information_Utiles /> : null}
        </Box>

        <Footer setPage={setPage} />
      </Box>
    </>
  );
}
