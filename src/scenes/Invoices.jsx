
import { Typography } from "@mui/material";

import { mockDataInvoices } from "../data/mockData";
import DataGridComponent from "../components/dataGrid/DataGridComponent";
import { useColors } from "../hooks/useColors";

const Invoices = () => {
  const { colors } = useColors();
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