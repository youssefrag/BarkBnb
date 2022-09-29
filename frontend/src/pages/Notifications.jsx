import { useState } from "react";
import { OffersReceived } from "../components/OffersReceived";

export const Notifications = () => {
  const [page, setPage] = useState("offersReceived");

  if (page === "offersReceived") {
    return <OffersReceived />;
  }
};
