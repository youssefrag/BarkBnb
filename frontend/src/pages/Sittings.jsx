import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../context/userContext";

import { useNavigate } from "react-router-dom";

import { makeStyles, createStyles } from "@mui/styles";

import { Typography, TextField, Button, Container, Box } from "@mui/material";
import { SittingCard } from "../components/SittingCard";

const useStyles = makeStyles((theme) =>
  createStyles({
    mainBox: {
      backgroundColor: theme.palette.primary.light1,
      borderRadius: "11px",
      boxShadow: "0 2.4rem 4.8rem rgba( 0,0,0,0.15)",
      height: "50rem",
      width: "100%",
      overflow: "hidden",
      display: "grid",
      gridTemplateColumns: "2fr 1fr",
    },
    information: {
      padding: "4rem",
    },
    fields: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      columnGap: "6rem",
      rowGap: "4rem",
    },
    field: {
      backgroundColor: "#fff",
      width: "100%",
      borderRadius: "9px",
    },
    imageContainer: {
      backgroundImage: "url('/images/create-sitting.png')",

      backgroundSize: "cover",
      width: "auto",
      backgroundPosition: "-12rem",
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
    MTL: "Montreal, Quebec",
    TOR: "Toronto, Ontario",
    VAN: "Vancouver, British Columbia",
    CAL: "Calgary, Alberta",
    OTT: "Ottawa, Ontario",
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
      <Container className={classes.dogsContainer} marginTop={9} maxWidth="lg">
        <Typography variant="h1" marginBottom={9}>
          All sittings
        </Typography>
        <Box className={classes.sittingCards}>{renderSittings}</Box>
      </Container>
    </Box>
  );
};
