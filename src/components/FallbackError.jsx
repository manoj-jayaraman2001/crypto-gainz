import { Alert, AlertTitle, Grid } from "@mui/material";

const styles = {
  root: {
    height: "100vh",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: '0 20px'
  },
};

const FallbackError = ({ errorMessage }) => {
  return (
    <Grid container style={styles.root}>
      <Grid item xs={12} md={6}>
        <Alert severity="error" variant="outlined">
          <AlertTitle>Error</AlertTitle>
          {errorMessage ||
            "Something went wrong. Please check your internet connection or try again later."}
        </Alert>
      </Grid>
    </Grid>
  );
};

export default FallbackError;
