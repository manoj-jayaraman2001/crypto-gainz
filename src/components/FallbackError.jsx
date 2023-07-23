import { Alert, AlertTitle } from "@mui/material";

const styles = {
  root: {
    height: "100vh",
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

const FallbackError = ({ errorMessage }) => {
  return (
    <div style={styles.root}>
      <Alert severity="error" variant="outlined">
        <AlertTitle>Error</AlertTitle>
        {errorMessage ||
          "Something went wrong. Please check your internet connection or try again later."}
      </Alert>
    </div>
  );
};

export default FallbackError;
