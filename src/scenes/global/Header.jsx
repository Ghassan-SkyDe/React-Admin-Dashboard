import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { useLocation } from "react-router-dom";


const Header = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const path = useLocation().pathname.slice(1);
    const title = path === "" ? "Dashboard" : path;
    // change this at last--fixIt
    const isChartPage = path === "pie" || path === "bar" || path === "line" || path === "geography" ? true : false;
    // subtitles
    // team => Managing the Team Members
    // contacts => list of Contacts for Future Reference 
    // contacts => list of Contacts for Future Reference 
    // invoices => list of Invoices balances 
    // form => create new user profile
    // calendar => fullCalendar interactive page
    // faq => Frequently Asked Questions Page
    // bar => Bar chart page for more details
    // pi => Pi chart page for more details
    // line => Line chart page for more details
    // geography => Geography Chart page for more details
  return (
    <Box mb="30px" display="flex" flexDirection="column" alignItems="flex-start" sx={{padding:"0 0.5rem"}}>
        <Typography variant="h2" color={colors.gray[100]} fontWeight="bold" sx={{mb:"5px"}}>{title.toUpperCase()}</Typography>
        <Typography variant="h5" color={colors.greenAccent[400]}>{`Welcome to your ${title} ${isChartPage ? "chart" : ''} page`}</Typography>
    </Box>
  )
}

export default Header