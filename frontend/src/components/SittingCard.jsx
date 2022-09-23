import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Box,
} from "@mui/material";
import { useContext } from "react";
import { UserContext } from "../context/userContext";

import { useNavigate } from "react-router-dom";

export const SittingCard = (props) => {
  //   const classes = useStyles();

  let navigate = useNavigate();

  const { userContextEmail, userContextName } = useContext(UserContext);

  const mySitting = (username) => {
    return username === userContextName;
  };

  const handleMakeOffer = () => {
    if (props.username === userContextName) {
      alert("You cannot make offer on your own sitting!");
      return;
    }
    alert("make offer");
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
      <Box sx={{ display: "flex" }}>
        <CardContent>
          <Typography gutterBottom variant="h3" component="div">
            Dog name: {props.name}
          </Typography>
          <Typography gutterBottom variant="h3" component="div">
            Owner name: {props.owner}
          </Typography>
          <Typography gutterBottom variant="h3" component="div">
            location: {props.location}
          </Typography>
          <Typography gutterBottom variant="h3" component="div">
            start date: {props.startDate}
          </Typography>
          <Typography gutterBottom variant="h3" component="div">
            end date: {props.endDate}
          </Typography>
        </CardContent>
        <CardActions>
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
    </Card>
  );
};
