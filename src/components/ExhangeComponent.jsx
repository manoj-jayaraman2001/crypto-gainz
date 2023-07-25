import React from "react";
import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Grid,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import "../styles/exchanges.css";
const ExchangeComponent = ({
  name,
  icon,
  tradeVolume,
  trustScore,
  trustRank,
  description,
  url,
  bold,
  isDisabled,
}) => {
  return (
    <Accordion
      disabled={isDisabled}
      style={{ backgroundColor: "white", color: "black" }}
    >
      <AccordionSummary expandIcon={!isDisabled && <ExpandMore />}>
        <Grid container alignItems="center" className="exchange-content">
          <Grid
            item
            container
            alignItems="center"
            gap={2}
            width="fit-content"
            xs={3}
          >
            {icon && <img src={icon} alt={"img"} height={20} width={20} />}
            <Typography fontSize={"1em"} fontWeight={bold ? 600 : 500}>
              {name}
            </Typography>
          </Grid>
          <Grid item container justifyContent="center" xs={3}>
            <Typography fontSize={"1em"} fontWeight={bold ? 600 : 500}>
              {tradeVolume}
            </Typography>
          </Grid>
          <Grid item container xs={3} justifyContent="center">
            <Typography fontSize={"1em"} fontWeight={bold ? 600 : 500}>
              {trustScore}
            </Typography>
          </Grid>
          <Grid item container xs={3} justifyContent="center">
            <Typography fontSize={'1em'} fontWeight={bold ? 600 : 500}>
              {trustRank}
            </Typography>
          </Grid>
        </Grid>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container flexDirection="column" gap={2}>
          <Grid item>
            {
              <Typography variant="p">
                Description: {description ? description : "-"}
              </Typography>
            }
          </Grid>
          <Grid item container gap={2}>
            {url && (
              <>
                <Typography variant="p">URL:</Typography>
                <a href={url}>{url}</a>
              </>
            )}
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};

export default ExchangeComponent;
