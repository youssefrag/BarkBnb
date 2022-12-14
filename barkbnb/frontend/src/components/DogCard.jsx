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

import { useNavigate } from "react-router-dom";

export const DogCard = (props) => {
  let navigate = useNavigate();

  let size = "";

  if (props.sizeVariable === "L") {
    size = "Large";
  } else if (props.sizeVariable === "M") {
    size = "Medium";
  } else if (props.sizeVariable === "S") {
    size = "Small";
  }

  return (
    <Card
      sx={{
        maxWidth: 345,
        borderRadius: "9px",
        boxShadow: "0 1.2rem 3.2rem rgba(0, 0, 0, 0.3)",
      }}
    >
      {/* <img src={props.imageLink} /> */}
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
            {props.name}
          </Typography>
          <Typography variant="h3">Size: {size}</Typography>
        </CardContent>
        <CardActions>
          <Button
            onClick={() => navigate(`/create-sitting/${props.name}`)}
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
            Post Sitting
          </Button>
        </CardActions>
      </Box>
    </Card>
  );
};
