import React, { useState } from "react";

import { Typography, Box, Container, Button, Modal } from "@mui/material";

import { createStyles, makeStyles } from "@mui/styles";

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

    howItWorksBtns: {
      display: "flex",
      gap: "4rem",
    },
  })
);

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
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
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Text in a modal
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Duis mollis, est non commodo luctus, nisi erat porttitor
                  ligula.
                </Typography>
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
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Text in a modal
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Duis mollis, est non commodo luctus, nisi erat porttitor
                  ligula.
                </Typography>
              </Box>
            </Modal>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};
