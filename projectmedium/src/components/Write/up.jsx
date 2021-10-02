import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import { BsArrowDown } from "react-icons/bs";
export default function SimpleAccordion(props) {
  return (
    <div>
      <Accordion
        style={{
          backgroundColor: "black",
          color: "white",
          borderBottom: "1px solid white",
        }}
      >
        <AccordionSummary
          expandIcon={
            <BsArrowDown style={{ color: "white", fontSize: "40px" }} />
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h5" style={{ padding: "24px 60px 0px" }}>
            {props.head}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h6" style={{ padding: "0px 60px 14px" }}>
            {props.body}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

