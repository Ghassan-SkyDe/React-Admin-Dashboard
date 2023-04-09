import { Typography } from "@mui/material";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { ExpandMoreOutlined } from "@mui/icons-material";
import { useColors } from "../../hooks/useColors";

const AccordionComponent = ({ summary, details, isExpanded }) => {
  const { colors } = useColors();
  
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