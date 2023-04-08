import { Box } from '@mui/material';
import PieChart from '../components/charts/PieChart';
import { mockPieData as data } from '../data/mockData';

const Pie = () => {
  return (
    <Box height="75vh" width="85vw">
      <PieChart data={data} />
    </Box>
  )
}

export default Pie