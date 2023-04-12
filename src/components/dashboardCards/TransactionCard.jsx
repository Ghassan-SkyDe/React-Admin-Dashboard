import { Box, Typography } from "@mui/material";
import { useColors } from "../../hooks/useColors";
import { mockTransactions } from "../../data/mockData";

const TransactionItem = ({ user, date, cost, txId }) => {
  const { colors }  = useColors();
  return(
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      borderBottom={`4px solid ${colors.primary[500]}`}
      p="15px"
    >
      <Box>
        <Typography
          color={colors.greenAccent[500]}
          variant="h5"
          fontWeight="600"
        >
          {txId}
        </Typography>
        <Typography color={colors.gray[100]}>
          {user}
        </Typography>
      </Box>
      <Box color={colors.gray[100]}>{date}</Box>
      <Box
        backgroundColor={colors.greenAccent[500]}
        p="5px 10px"
        borderRadius="4px"
      >
        ${cost}
      </Box>
    </Box>
  )
}


const TransactionList = ( { xsGridColumn, smGridColumn, mdGridColumn }) => {
  const { colors } = useColors();
  return (
      <Box
          sx={{ gridColumn: { xs: xsGridColumn, sm: smGridColumn, md: mdGridColumn } }}
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
            sx={{ zIndex:"55", position:"sticky", top:"0px", height:"50px", width:"100%" }}
          >
            <Typography color={colors.gray[100]} variant="h5" fontWeight="600">
              Recent Transactions
            </Typography>
          </Box>
          {/*Transactions-- Items */}
          { mockTransactions?.map(transaction => <TransactionItem key={transaction.id} {...transaction} />) }
      </Box>
  )
}

export default TransactionList