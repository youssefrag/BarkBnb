import { useContext, useState } from "react";
import { Button, Container, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import { UserContext } from "../context/userContext";
import { useEffect } from "react";

const datagridSx = {
  height: "60rem",
  "& .MuiDataGrid-columnHeaders": {
    backgroundColor: "primary.light2",
  },
  "& .MuiDataGrid-columnHeaderTitle": {
    fontWeight: "bold",
    fontSize: 16,
  },
  "& .MuiDataGrid-virtualScrollerRenderZone": {
    "& .MuiDataGrid-row": {
      "&:nth-of-type(2n)": {
        backgroundColor: "primary.light2",
      },
    },
  },
  "& .MuiDataGrid-cellContent": {
    fontSize: 16,
  },
  "& .MuiTablePagination-displayedRows": {
    fontSize: "2rem ",
  },
};

const getColumns = () => {
  return [
    {
      field: "sitter",
      headerName: "Sitter",
      minWidth: 150,
    },
    {
      field: "dog",
      headerName: "Dog",
      minWidth: 120,
    },
    {
      field: "startDate",
      headerName: "Start Date",
      minWidth: 175,
    },
    {
      field: "endDate",
      headerName: "End Date",
      minWidth: 175,
    },
    {
      field: "price",
      headerName: "price",
      minWidth: 50,
    },
    {
      field: "Status",
      minWidth: 50,
      renderCell: (cellValues) => {
        return <Typography sx={{ fontSize: "2rem" }}>Pending</Typography>;
      },
    },
  ];
};

export const OffersSent = () => {
  const { userContextName } = useContext(UserContext);

  const [offersSent, setOffersSent] = useState([]);

  const getOffersSent = async () => {
    let response = await fetch(
      `http://127.0.0.1:8000/api/get-offers-sent/${userContextName}`
    );
    let data = await response.json();
    setOffersSent(data);
  };

  useEffect(() => {
    getOffersSent();
  }, []);

  const gridRowsArray = [];

  for (let i = 0; i < offersSent.length; i++) {
    let offerObject = {};
    offerObject.id = offersSent[i].id;
    offerObject.sitter = offersSent[i].sitter.name;
    offerObject.startDate = offersSent[i].sitting.start_date;
    offerObject.endDate = offersSent[i].sitting.end_date;
    offerObject.price = offersSent[i].price;
    offerObject.dog = offersSent[i].sitting.dog.name;
    gridRowsArray.push(offerObject);
  }

  return (
    <Container maxWidth="md" sx={{ height: "30rem" }}>
      <DataGrid
        rows={gridRowsArray}
        columns={getColumns()}
        headerHeight={60}
        rowHeight={120}
        pageSize={5}
        sx={datagridSx}
      ></DataGrid>
      ;
    </Container>
  );
};
