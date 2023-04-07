import { Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { ExpandMoreOutlined } from "@mui/icons-material";

const AccordionComponent = ({ summary, details, isExpanded }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  
  return (
    <Accordion defaultExpanded={ isExpanded }>
        <AccordionSummary expandIcon={<ExpandMoreOutlined/>}>
          <Typography color={colors.greenAccent[500]} variant="h5">
           {summary}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                {details}
            </Typography>
        </AccordionDetails>
      </Accordion>
  )
}

export default AccordionComponent