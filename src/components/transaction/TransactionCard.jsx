import { Box, Typography } from "@mui/material";
import { useColors } from "../../hooks/useColors";

const TransactionCard = ({ user, date, cost, txId }) => {
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


export default TransactionCard;