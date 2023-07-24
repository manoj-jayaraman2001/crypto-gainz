import { Paper, Grid, Typography } from "@mui/material";

const StatisticCard = ({ title, value, icon }) => {
  return (
    <Paper elevation={3} sx={{ padding: 2, minWidth: 150, maxWidth: 350 }}>
      <Grid container alignItems="center" spacing={2}>
        <Grid item>{icon}</Grid>
        <Grid item xs={8}>
          <Typography variant="subtitle1" fontFamily={"Karla"}>
            {title}
          </Typography>
        </Grid>
        <Grid item xs={7} textAlign="right">
          <Typography variant="h5" fontWeight="bold" fontFamily={"Lato"}>
            {value}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default StatisticCard;
