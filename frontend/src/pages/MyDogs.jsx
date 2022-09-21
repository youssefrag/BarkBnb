import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../context/userContext";

import { makeStyles, createStyles } from "@mui/styles";

import { Typography, TextField, Button, Container, Box } from "@mui/material";

import { DogCard } from "../components/DogCard";

const useStyles = makeStyles((theme) =>
  createStyles({
    dogsContainer: {
      backgroundColor: theme.palette.primary.light1,
    },
  })
);

export const MyDogs = () => {
  const classes = useStyles();

  const { userContextEmail } = useContext(UserContext);

  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    getDogs();
  }, []);

  const getDogs = async () => {
    let response = await fetch(
      `http://127.0.0.1:8000/api/dogs/${userContextEmail}`
    );
    let data = await response.json();
    setDogs(data);
  };

  console.log(dogs);

  let renderDogCards = [];

  renderDogCards = dogs.map((dog) => {
    const imageLink = "http://127.0.0.1:8000" + dog.dog_image;

    return <DogCard name={dog.name} imageLink={imageLink} />;
  });

  return (
    <Box marginTop={12}>
      <Container className={classes.dogsContainer} marginTop={9} maxWidth="lg">
        <Box className={classes.dogCards}>{renderDogCards}</Box>
      </Container>
    </Box>
  );
};
