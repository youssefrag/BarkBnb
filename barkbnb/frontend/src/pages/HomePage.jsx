import React, { useState } from "react";

import { Typography, Box, Container, Button, Modal } from "@mui/material";

import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    heroSection: {
      backgroundColor: theme.palette.primary.light2,
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
    heroMainInfo: {
      width: "50%",
      [theme.breakpoints.down("lg")]: {
        width: "100%",
        paddingLeft: "10rem",
      },
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
    howItWorks: {
      [theme.breakpoints.down("lg")]: {
        paddingLeft: "10rem",
      },
    },

    howItWorksBtns: {
      display: "flex",
      gap: "3.2rem",
    },
    stepBox: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "7rem",
    },
    stepText: {
      width: "40rem",
    },
    heroImgContainer: {
      [theme.breakpoints.down("lg")]: {
        display: "none",
      },
    },
  })
);

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90rem",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "30px",
  padding: "4rem",
};

export const HomePage = () => {
  const classes = useStyles();

  const [openOwner, setOpenOwner] = useState(false);
  const handleOpenOwner = () => setOpenOwner(true);
  const handleCloseOwner = () => setOpenOwner(false);

  const [openSitter, setOpenSitter] = useState(false);
  const handleOpenSitter = () => setOpenSitter(true);
  const handleCloseSitter = () => setOpenSitter(false);

  return (
    <Box className={classes.home} marginTop={8}>
      <Box className={classes.heroSection} paddingBottom={11}>
        <Container className={classes.heroContainer} maxWidth="xl">
          <Box className={classes.heroBox}>
            <Box className={classes.heroMainInfo}>
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
            <Box className={classes.heroImgContainer}>
              <img
                src="https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGRvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                style={{ height: "40rem" }}
              />
            </Box>
          </Box>
        </Container>
      </Box>
      <Box className={classes.howItWorks} marginTop={7} marginBottom={6}>
        <Container className={classes.heroContainer} maxWidth="xl">
          <Typography variant="h2" color="primary">
            How it works
          </Typography>
          <Typography variant="h1" marginTop={6}>
            Get started with a few simple steps!
          </Typography>
          <Box className={classes.howItWorksBtns} marginTop={7}>
            <Button size="large" variant="contained" onClick={handleOpenOwner}>
              Dog Owner
            </Button>
            <Modal
              open={openOwner}
              onClose={handleCloseOwner}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={modalStyle}>
                <Box className={classes.stepBox}>
                  <Box className={classes.stepNumBox} paddingLeft={7}>
                    <Typography id="modal-modal-title" variant="stepNum">
                      01
                    </Typography>
                  </Box>
                  <Box className={classes.stepText}>
                    <Typography variant="h2">Login or Sign up!</Typography>
                    <Typography variant="h3">
                      In order to get started, please create an account
                    </Typography>
                  </Box>
                </Box>
                <Box className={classes.stepBox}>
                  <Box className={classes.stepText}>
                    <Typography variant="h2">Create a dog profile</Typography>
                    <Typography variant="h3">
                      Create a profile for your dog and fill out the required
                      information
                    </Typography>
                  </Box>
                  <Box className={classes.stepNumBox} paddingRight={7}>
                    <Typography id="modal-modal-title" variant="stepNum">
                      02
                    </Typography>
                  </Box>
                </Box>
                <Box className={classes.stepBox}>
                  <Box className={classes.stepNumBox} paddingLeft={7}>
                    <Typography id="modal-modal-title" variant="stepNum">
                      03
                    </Typography>
                  </Box>
                  <Box className={classes.stepText}>
                    <Typography variant="h2">Post sitting</Typography>
                    <Typography variant="h3">
                      Create new sitting poriving relevant information like
                      dates and location
                    </Typography>
                  </Box>
                </Box>
                <Box className={classes.stepBox} marginBottom={0}>
                  <Box className={classes.stepText}>
                    <Typography variant="h2">Accept offer</Typography>
                    <Typography variant="h3">
                      When dog sitters make offers on the sitting you have
                      posted, you may accept and offer and pay the sitter in
                      cash when he comes to pick up dog upon sitting start day
                    </Typography>
                  </Box>
                  <Box className={classes.stepNumBox} paddingRight={7}>
                    <Typography id="modal-modal-title" variant="stepNum">
                      04
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Modal>
            <Button size="large" variant="contained" onClick={handleOpenSitter}>
              Dog Sitter
            </Button>
            <Modal
              open={openSitter}
              onClose={handleCloseSitter}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={modalStyle}>
                <Box className={classes.stepBox}>
                  <Box className={classes.stepNumBox} paddingLeft={7}>
                    <Typography id="modal-modal-title" variant="stepNum">
                      01
                    </Typography>
                  </Box>
                  <Box className={classes.stepText}>
                    <Typography variant="h2">Login or Sign up!</Typography>
                    <Typography variant="h3">
                      In order to get started, please create an account
                    </Typography>
                  </Box>
                </Box>
                <Box className={classes.stepBox}>
                  <Box className={classes.stepText}>
                    <Typography variant="h2">
                      Browse available sitting
                    </Typography>
                    <Typography variant="h3">
                      Filter through available sittings based on dates and
                      location
                    </Typography>
                  </Box>
                  <Box className={classes.stepNumBox} paddingRight={7}>
                    <Typography id="modal-modal-title" variant="stepNum">
                      02
                    </Typography>
                  </Box>
                </Box>
                <Box className={classes.stepBox}>
                  <Box className={classes.stepNumBox} paddingLeft={7}>
                    <Typography id="modal-modal-title" variant="stepNum">
                      03
                    </Typography>
                  </Box>
                  <Box className={classes.stepText}>
                    <Typography variant="h2">Make an offer!</Typography>
                    <Typography variant="h3">
                      Make an offer to the dog owner, naming the price you would
                      like to charge!
                    </Typography>
                  </Box>
                </Box>
                <Box className={classes.stepBox} marginBottom={0}>
                  <Box className={classes.stepText}>
                    <Typography variant="h2">Happy sitting</Typography>
                    <Typography variant="h3">
                      If offer is accepted by dog owner, you pickup the dog at
                      the agreed date and time with payment made in cash upon
                      arrival
                    </Typography>
                  </Box>
                  <Box className={classes.stepNumBox} paddingRight={7}>
                    <Typography id="modal-modal-title" variant="stepNum">
                      04
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Modal>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};
