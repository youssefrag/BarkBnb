import { useContext, useState } from "react";
import { Button, Container } from "@mui/material";
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
  ];
};

export const MySittings = () => {
  const { userContextName } = useContext(UserContext);

  const [mySittings, setMySittings] = useState([]);

  const getMySittings = async () => {
    let response = await fetch(
      `http://127.0.0.1:8000/api/get-mysittings/${userContextName}`
    );
    let data = await response.json();
    setMySittings(data);
  };

  console.log(mySittings);

  useEffect(() => {
    getMySittings();
  }, []);

  return (
    <Container maxWidth="md" sx={{ height: "30rem" }}>
      <DataGrid
        // rows={gridRowsArray}
        rows={[{ id: 1, name: "Schlomo" }]}
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
