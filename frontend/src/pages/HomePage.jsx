import React from "react";

import { Typography, Box, Container } from "@mui/material";

import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      marginTop: "7.5rem",
    },
    heroSection: {
      backgroundColor: theme.palette.primary.light3,
      height: "89.5vh",
    },
    heroContainer: {
      display: "flex",
      maxWidth: "130rem",
    },
    heroMainainInfo: {
      width: "50%",
      paddingTop: "5.2rem",
    },
  })
);

export const HomePage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box className={classes.heroSection}>
        <Container className={classes.heroContainer} maxWidth="xl">
          <Box className={classes.heroMainainInfo}>
            <Typography variant="h1">
              Your puppy will always be taken care of!
            </Typography>
          </Box>
          <Box className={classes.heroGallery}></Box>
        </Container>
      </Box>
    </div>
  );
};
