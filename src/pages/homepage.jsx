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

function GetTitle({ page }) {
  if (page == 0) return <>{"Le Cabinet"}</>;
  if (page == 1) return <>{"Domaines de compétences"}</>;
  if (page == 2) return <>{"Honoraires"}</>;
  if (page == 3) return <>{"Contact"}</>;
}
export default function HomePage() {
  const [page, setPage] = React.useState(0);
  const { page_id } = useParams();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
    if (page_id == "lecaninet") setPage(0);
    if (page_id == "domainesdecompetences") setPage(1);
    if (page_id == "honoraire") setPage(2);
    if (page_id == "contact") setPage(3);
    if (page_id == "mention") setPage(4);
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <CssBaseline />
      <Box sx={{ height: "100vh" }}>
        <Box sx={{ maxHeight: "350px" }}>
          <Box
            sx={{
              height: "100%",
              ml: "100px",
              mt: "150px",
              maxHeight: "130px",
              objectFit: "scale-down",
              position: "absolute",
              opacity: "1",
            }}
            component="img"
            src="./img/logo_vic2.png"
          />
          <Box
            sx={{
              width: "100%",
              backgroundPosition: "center 0px",
              height: "300px",
              padding: "90",
              objectFit: "cover",
              opacity: "0.5",
            }}
            component="img"
            src="./img/narbonne7.png"
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
                  onClick={() => setPage(3)}
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
        </Box>

        <Footer setPage={setPage} />
      </Box>
    </>
  );
}
