import { Box } from "@mui/material";
import AccordionComponent from "../components/accordion/AccordionComponent";
import { mockFaqData } from "../data/faqData";



const FAQ = () => {
  // replace with backend data
  const faqData = mockFaqData;
  return (
    <Box m="20px">
      {faqData && faqData.map( question => <AccordionComponent key={question.key} {...question}/> ) }
    </Box>
  )
}

export default FAQ