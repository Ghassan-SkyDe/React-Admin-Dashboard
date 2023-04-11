import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { useColors } from "../hooks/useColors";
import { LineChart, BarChart, GeographyChart } from "../components/charts";
import { mockLineData2, mockBarData, mockGeographyData, mockStatData, mockTransactions  } from "../data/mockData";
import { geoFeatures } from "../data/mockGeoFeatures";
import StatBox from "../components/statBox/StatBox";
import ProgressCircle from "../components/statBox/ProgressCircle";
import { DownloadOutlined } from "@mui/icons-material";
import TransactionCard from "../components/transaction/TransactionCard";

// replace with fechted data
const lineChartNumber = 59342032;
const revenue = 48352;

const Dashboard = () => {
  const { colors }  = useColors();
  // add code to download real data
  const downloadLineStatsHandle = () => {console.log("downloadLineStats")};
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
      {/* StatBoxes */}
      {mockStatData?.map((stats) => ( 
        <Box
          key={stats.id}
          sx={{gridColumn:{ xs:"span 12", sm:"span 12",md:"span 6",lg:"span 3"}, border:{sm:"1px solid white",md:"1px solid red",lg:"1px solid yellow",xl:"1px solid green",}}}
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center">
           <StatBox {...stats}/>
          </Box>
      ))}
      {/* Row 2 --------------------------------------------------------*/}
      {/* LineChart */}
      <Box 
        // gridColumn="span 8"
        sx={{gridColumn:{ xs:"span 12",md:"span 8"}}}
        gridRow="span 2"
        backgroundColor={colors.primary[400]}>
        {/* LineChart----title */}
        <Box m="1rem 1rem 0 1rem" display="flex" alignItems="center" justifyContent="space-between">
          <Box>
            <Typography variant="h3" fontWeight="600" color={colors.gray[100]}>Revenue Generated</Typography>
            <Typography variant="h4" fontWeight="500" color={colors.greenAccent[500]} >
              {`$ ${lineChartNumber.toLocaleString()}`}
            </Typography>
          </Box>
          <IconButton onClick={downloadLineStatsHandle}>
            <DownloadOutlined sx={{ fontSize: "30px", color: colors.greenAccent[500]} }/>
          </IconButton>

        </Box>
        {/* LineChart----component */}
        <Box height="260px" mt="-20px">
          <LineChart isMinimal/>
        </Box>
      </Box>

      {/* Transactions */}
      <Box
          // gridColumn="span 4"
          sx={{gridColumn:{ xs:"span 12",sm:"span 6",md:"span 4"}}}

          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
          position="relative"
          width="100%"
        >
          {/*Transactions-- title */}
          <Box
            display="flex"
            borderBottom={`1px solid ${colors.greenAccent[400]}`}
            backgroundColor="inherit"
            colors={colors.gray[100]}
            p="15px"
            sx={{zIndex:"55",position:"sticky",top:"0px",height:"50px",width:"100%"}}
          >
            <Typography color={colors.gray[100]} variant="h5" fontWeight="600">
              Recent Transactions
            </Typography>
          </Box>
          {/*Transactions-- Cards */}
          { mockTransactions?.map(transaction => <TransactionCard key={transaction.id} {...transaction} />) }
      </Box>

      {/* Row 3 -------------------------------------------------------------- */}
      {/* first */}
      <Box
      //  gridColumn="span 4" 
       sx={{gridColumn:{ xs:"span 12",sm:"span 6",md:"span 6",xl:"span 4"}}}
       gridRow="span 2" 
       backgroundColor={colors.primary[400]} 
       p="30px">
        <Typography variant="h5" fontWeight="600">Campaign</Typography>
        <Box dispay="flex" flexDirection="column" alignItems="center" mt="25px">
          <ProgressCircle size="125" />
          <Typography variant="h5" color={colors.greenAccent[500]} sx={{ mt: "15px"}}>
            {`$ ${revenue.toLocaleString()} revenue generated`}
          </Typography>
          <Typography>Includes extra misx expenditures and costs</Typography>
        </Box>
      </Box>
      {/* second */}
      <Box
      //  gridColumn="span 4" 
       sx={{gridColumn:{ xs:"span 12",md:"span 6",xl:"span 4"}}}
       gridRow="span 2" 
       backgroundColor={colors.primary[400]} >
        <Typography variant="h5" fontWeight="600" sx={{p: "30px 30px 0 30px"}}>Sales Quantity</Typography>
        <Box height="260px" mt="-20px">
          <BarChart isMinimal />
        </Box>
      </Box>
      {/* third */}
      <Box
      //  gridColumn="span 4"
       sx={{gridColumn:{ xs:"span 12",md:"span 12",xl:"span 4"}}}
       gridRow="span 2" 
       p="30px"
       backgroundColor={colors.primary[400]} >
        <Typography variant="h5" fontWeight="600">Geography Based Traffic</Typography>
        <Box height="260px" mt="-25px">
          <GeographyChart isMinimal />
        </Box>
      </Box>
    </Box>
  )
}

export default Dashboard



