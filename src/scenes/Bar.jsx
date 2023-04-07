import BarChart from '../components/charts/BarChart';
import { Box } from '@mui/material';
import { mockBarData as data } from "../data/mockData";


const Bar = () => {
  return (
  <Box height="75vh" width="85vw">
    <BarChart data={data}/>
  </Box>
  )
}

export default Bar