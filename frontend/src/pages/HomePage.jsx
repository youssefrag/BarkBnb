import React from "react";

import { Typography, Box, Container, Button } from "@mui/material";

import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    // home: {
    //   marginTop: "7.5rem",
    // },
    heroSection: {
      backgroundColor: theme.palette.primary.light3,
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
    <Box className={classes.home} marginTop={8}>
      <Box className={classes.heroSection} paddingBottom={11}>
        <Container className={classes.heroContainer} maxWidth="xl">
          <Box className={classes.heroMainainInfo}>
            <Typography variant="h1" marginY={8}>
              Your puppy will always be taken care of!
            </Typography>
            <Typography variant="h3">
              Whether you have to go on vacation or a business trip, your puppy
              will always be taken care of with BarkBnb!
            </Typography>
            <Box class={classes.heroBtnContainer} marginTop={8}>
              <Button
                variant="dashed"
                color="primaryDark2"
                className={classes.actionBtn}
              >
                <Typography variant="btn" color="white">
                  Get started!
                </Typography>
              </Button>
              <Button
                className={classes.leanMore}
                marginLeft={8}
                variant="dashed"
              >
                <Typography variant="btn">Leaern more</Typography>
              </Button>
            </Box>
          </Box>
          <Box className={classes.heroGallery}></Box>
        </Container>
      </Box>
    </Box>
  );
};
