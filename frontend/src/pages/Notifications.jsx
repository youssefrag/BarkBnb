import { useState } from "react";

import { Button, Container, Stack } from "@mui/material";

import { OffersReceived } from "../components/OffersReceived";
import { OffersSent } from "../components/OffersSent";

export const Notifications = () => {
  const [page, setPage] = useState("offersReceived");

  const styles = {
    containerSx: {
      marginTop: "12rem",
    },
    stackSx: {
      marginBottom: "3rem",
      flexDirection: "row",
      justifyContent: "space-around",
    },
  };

  if (page === "offersReceived") {
    return (
      <Container maxWidth="md" sx={styles.containerSx}>
        <Stack sx={styles.stackSx}>
          <Button variant="contained" onClick={() => setPage("offersReceived")}>
            Offers Received
          </Button>
          <Button variant="contained" onClick={() => setPage("offersSent")}>
            Offers Sent
          </Button>
          <Button variant="contained">Upcoming Sittings</Button>
        </Stack>
        <OffersReceived />;
      </Container>
    );
  } else if (page === "offersSent") {
    return (
      <Container maxWidth="md" sx={styles.containerSx}>
        <Stack sx={styles.stackSx}>
          <Button variant="contained" onClick={() => setPage("offersReceived")}>
            Offers Received
          </Button>
          <Button variant="contained" onClick={() => setPage("offersSent")}>
            Offers Sent
          </Button>
          <Button variant="contained">Upcoming Sittings</Button>
        </Stack>
        <OffersSent />;
      </Container>
    );
  }
};
