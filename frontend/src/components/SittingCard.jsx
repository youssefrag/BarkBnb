import React, { useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Box,
  Stack,
  Modal,
  TextField,
} from "@mui/material";
import { useContext } from "react";
import { UserContext } from "../context/userContext";

import { useNavigate } from "react-router-dom";

export const SittingCard = (props) => {
  //   const classes = useStyles();

  let navigate = useNavigate();

  const { userContextEmail, userContextName } = useContext(UserContext);

  const [openOffer, setOpenOffer] = useState(false);

  const handleOpenOffer = () => {
    setOpenOffer(true);
  };
  const handleCloseOffer = () => {
    setOpenOffer(false);
  };

  const handleMakeOffer = () => {
    if (props.username === userContextName) {
      alert("You cannot make offer on your own sitting!");
      return;
    }
    console.log(props);
    fetch(`http://127.0.0.1:8000/api/make-offer/${userContextEmail}`, {
      method: "POST",
      body: props,
    }).then(() => {
      navigate("/dogs");
    });
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        borderRadius: "9px",
        boxShadow: "0 1.2rem 3.2rem rgba(0, 0, 0, 0.3)",
      }}
    >
      <CardMedia
        style={{ top: 0 }}
        component="img"
        height="200"
        image={props.imageLink}
        style={{ transform: "translate:(42px, 90px)" }}
      />
      <Box sx={{ display: "flex", flexDirection: "column", padding: "2rem" }}>
        <CardContent>
          <Stack direction="row" justifyContent="space-between">
            <Typography gutterBottom variant="h3" component="div">
              Dog name
            </Typography>
            <Typography
              gutterBottom
              variant="h3"
              component="div"
              sx={{ fontWeight: "bold" }}
            >
              {props.name}
            </Typography>
          </Stack>
          <Stack direction="row" justifyContent="space-between">
            <Typography gutterBottom variant="h3" component="div">
              Owner name
            </Typography>
            <Typography
              gutterBottom
              variant="h3"
              component="div"
              sx={{ fontWeight: "bold" }}
            >
              {props.owner}
            </Typography>
          </Stack>
          <Stack direction="row" justifyContent="space-between">
            <Typography gutterBottom variant="h3" component="div">
              Location
            </Typography>
            <Typography
              gutterBottom
              variant="h3"
              component="div"
              sx={{ fontWeight: "bold" }}
            >
              {props.location}
            </Typography>
          </Stack>
          <Stack direction="row" justifyContent="space-between">
            <Typography gutterBottom variant="h3" component="div">
              Start Date
            </Typography>
            <Typography
              gutterBottom
              variant="h3"
              component="div"
              sx={{ fontWeight: "bold" }}
            >
              {props.startDate}
            </Typography>
          </Stack>
          <Stack direction="row" justifyContent="space-between">
            <Typography gutterBottom variant="h3" component="div">
              End Date
            </Typography>
            <Typography
              gutterBottom
              variant="h3"
              component="div"
              sx={{ fontWeight: "bold" }}
            >
              {props.endDate}
            </Typography>
          </Stack>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            onClick={handleMakeOffer}
            size="medium"
            sx={{
              marginLeft: "1.2rem",
              backgroundColor: "#04111c",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#fff",
                color: "#04111c",
              },
            }}
          >
            Make offer
          </Button>
        </CardActions>
      </Box>
      <Modal
        open={openOffer}
        onClose={handleCloseOffer}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Stack>
          <Typography variant="h3">
            Please Enter the price you would like to charge
          </Typography>
          <TextField />
        </Stack>
      </Modal>
    </Card>
  );
};
