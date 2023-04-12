import { Box, Typography } from '@mui/material'
import React from 'react'
import { BarChart } from '../charts'
import { useColors } from '../../hooks/useColors'

const BarChartCard = ({ xsGridColumn, mdGridColumn, xlGridColumn }) => {
  const { colors } = useColors();
  return (
    <Box
       sx={{ 
        gridColumn: { 
            xs: xsGridColumn, 
            md: mdGridColumn , 
            xl: xlGridColumn 
        }}}
       gridRow="span 2" 
       backgroundColor={colors.primary[400]} >
        <Typography variant="h5" fontWeight="600" sx={{p: "30px 30px 0 30px"}}>Sales Quantity</Typography>
        <Box height="260px" mt="-20px">
          <BarChart isMinimal />
        </Box>
      </Box>
  )
}

export default BarChartCard