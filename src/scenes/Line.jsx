import { Box } from '@mui/material';
import LineChart from '../components/charts/LineChart';
import { mockLineData2 as data } from '../data/mockData';

const Line = () => {
  return (
    <Box height="75vh" width="85vw">
      <LineChart data={data} isMinimal/>
    </Box>
  )
}

export default Line