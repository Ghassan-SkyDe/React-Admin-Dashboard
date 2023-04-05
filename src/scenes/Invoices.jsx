
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../theme";
import { mockDataInvoices } from "../data/mockData";
import DataGridComponent from "../components/dataGrid/DataGridComponent";

const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>
          {params.row.cost}
        </Typography>
      )
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    }
  ];
  
  return (
      <DataGridComponent 
        rows={mockDataInvoices} 
        columns={columns} 
        checkbox
        Toolbar/> 
  )
}

export default Invoices