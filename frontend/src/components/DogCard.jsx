import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import { Translate } from "@mui/icons-material";

export const DogCard = (props) => {
  return (
    <Card sx={{ maxWidth: 345, padding: "2rem" }}>
      <CardMedia
        style={{ top: 0 }}
        component="img"
        height="200"
        image={props.imageLink}
        style={{ transform: "translate:(42px, 90px)" }}
      />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};
