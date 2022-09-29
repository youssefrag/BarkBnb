import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../context/userContext";

import { useNavigate } from "react-router-dom";

import { makeStyles, createStyles } from "@mui/styles";

import { Typography, TextField, Button, Container, Box } from "@mui/material";
import { SittingCard } from "../components/SittingCard";

const useStyles = makeStyles((theme) =>
  createStyles({
    sittingCards: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      columnGap: "5rem",
      rowGap: "5rem",
      marginBottom: "5rem",
    },
  })
);

export const Sittings = () => {
  const classes = useStyles();

  const [sittings, setSittings] = useState([]);

  useEffect(() => {
    getSittings();
  }, []);

  const getSittings = async () => {
    let response = await fetch(`http://127.0.0.1:8000/api/sittings`);
    let data = await response.json();
    setSittings(data);
  };

  let renderSittings = [];

  const locations = {
    MTL: "Montreal",
    TOR: "Toronto",
    VAN: "Vancouver",
    CAL: "Calgary",
    OTT: "Ottawa",
  };

  renderSittings = sittings.map((sitting) => {
    const imageLink = "http://127.0.0.1:8000" + sitting.dog.dog_image;

    return (
      <SittingCard
        name={sitting.dog.name}
        owner={sitting.dog.owner.name}
        location={locations[sitting.location]}
        startDate={sitting.start_date}
        endDate={sitting.end_date}
        imageLink={imageLink}
      />
    );
  });

  return (
    <Box marginTop={12}>
      <Container marginTop={9} maxWidth="lg">
        <Typography variant="h1" marginBottom={9}>
          All sittings
        </Typography>
        <Box className={classes.sittingCards}>{renderSittings}</Box>
      </Container>
    </Box>
  );
};
