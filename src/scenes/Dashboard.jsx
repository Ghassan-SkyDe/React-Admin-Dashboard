import { mockStatData  } from "../data/mockData";
import { Box } from "@mui/material";
import {
  StatCard ,
  LineChartCard,
  TransactionList,
  CampaignCard,
  BarChartCard,
  GeographyChartCard
} from "../components/dashboardCards";


const Dashboard = () => {
  return (
    // Grid
    <Box 
      maxWidth="100%" 
      maxHeight="82vh"
      display="grid" 
      gap="20px" 
      p="1rem" 
      gridTemplateColumns="repeat(12,1fr)"
      gridAutoRows="140px"
      sx={{overflow:{ xs: "auto", xl: "hidden"}}}
     >

      {/* Row 1 ----------------------------------------------------*/}
      {mockStatData?.map( stats => ( 
        <StatCard 
          key={stats.id}
          {...stats}
          xsGridColumn="span 12"
          smGridColumn="span 12"
          mdGridColumn="span 6"
          lgGridColumn="span 3" />
       ))}
      
      {/* Row 2 --------------------------------------------------------*/}
      <LineChartCard xsGridColumn="span 12" mdGridColumn="span 8" /> 
      <TransactionList xsGridColumn="span 12" smGridColumn="span 6" mdGridColumn="span 4" />

      {/* Row 3 -------------------------------------------------------------- */}
      <CampaignCard
       xsGridColumn="span 12" 
       smGridColumn="span 6" 
       mdGridColumn="span 6" 
       xlGridColumn="span 4"/>

      <BarChartCard
       xsGridColumn="span 12" 
       mdGridColumn="span 6" 
       xlGridColumn="span 4"/>
      {/* third */}
      <GeographyChartCard  
       xsGridColumn="span 12" 
       mdGridColumn="span 12" 
       xlGridColumn="span 4"/>
    </Box>
  )
}

export default Dashboard



