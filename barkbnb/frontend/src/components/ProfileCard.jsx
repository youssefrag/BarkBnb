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

export const ProfileCard = (props) => {
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
            {props.name}
          </Typography>
          {/* <Typography variant="h3">Size: {size}</Typography> */}
        </CardContent>
      </Box>
    </Card>
  );
};
