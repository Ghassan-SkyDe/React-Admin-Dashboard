import { Box, Button } from '@mui/material'
import image404 from '../assets/404.svg';
import { useNavigate } from 'react-router-dom';
const P404 = () => {
  const navigate = useNavigate();
  const goHomeHandle = () => navigate("/");
  return (
    <Box width="85vw" height="75vh">
      <img src={image404} alt="404" width="100%" height="100%"/>
    </Box>
  )
}

export default P404