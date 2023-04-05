import { mockDataContacts } from "../data/mockData";
import DataGridComponent from "../components/dataGrid/DataGridComponent";

const Contacts = () => {
  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "registrarId", headerName: "Registrar ID"},
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 2,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 2,
    },
    {
      field: "city",
      headerName: "City",
      flex: 0,
    },
    {
      field: "zipCode",
      headerName: "Zip Code",
      flex: 0,
    }
  ];
  
  return (
   <DataGridComponent 
     rows={mockDataContacts} 
     columns={columns} 
     Toolbar />  
)};

export default Contacts;