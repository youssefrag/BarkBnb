import React from "react";

import heroGalleryPictures from "../assets/hero-pictures";

import { Typography, Box, Container, Button } from "@mui/material";

import { createStyles, makeStyles } from "@mui/styles";
import { style } from "@mui/system";

const useStyles = makeStyles((theme) =>
  createStyles({
    heroSection: {
      backgroundColor: theme.palette.primary.light3,
    },
    heroContainer: {
      maxWidth: "130rem",
    },
    heroBox: {
      paddingTop: "10rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    heroMainainInfo: {
      width: "50%",
    },
    heroBtnContainer: {
      display: "flex",
      gap: "1.6rem",
    },
    learnMore: {
      "&:hover": {
        backgroundColor: "#14538a",
        border: "2px white",
      },
    },
    heroGallery: {
      position: "relative",
    },
    img1Container: {
      position: "relative",
      overflow: "hidden",
      width: "40rem",
      transform: "translate(-45rem, -20rem)",
      position: "absolute",
      zIndex: "1",
    },
    img1: {
      transform: "translate(-30rem, 5rem)",
    },
    img2Container: {
      position: "relative",
      overflow: "hidden",
      height: "300rem",
      width: "500rem",
      transform: "translate(-50rem, 25rem)",
      position: "absolute",
      zIndex: "2",
    },
    img2: {
      transform: "scale(2,2)",
      transform: "translate(0, 0)",
    },
  })
);

const dimensions = {
  heroImg: {
    height: "400px",
    width: "auto",
  },
};

export const HomePage = () => {
  const classes = useStyles();

  return (
    <Box className={classes.home} marginTop={8}>
      <Box className={classes.heroSection} paddingBottom={11}>
        <Container className={classes.heroContainer} maxWidth="xl">
          <Box className={classes.heroBox}>
            <Box className={classes.heroMainainInfo}>
              <Typography variant="h1" marginY={8}>
                Your puppy will always be taken care of!
              </Typography>
              <Typography variant="h3">
                Whether you have to go on vacation or a business trip, your
                puppy will always be taken care of with BarkBnb!
              </Typography>
              <Box className={classes.heroBtnContainer} marginTop={8}>
                <Button size="large" variant="contained">
                  Get started!
                </Button>
                <Button className={classes.learnMore} size="large">
                  Learn more
                </Button>
              </Box>
            </Box>
            <Box className={classes.heroGallery}>
              <img
                src="https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGRvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                style={dimensions.heroImg}
              />
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};
