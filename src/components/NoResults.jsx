import React from 'react';
import Typography from '@mui/material/Typography';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import Box from '@mui/material/Box';

const NoResultsFound = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="300px"
    >
      <SentimentVeryDissatisfiedIcon color="primary" fontSize="large" />
      <Typography variant="h5" color="textPrimary" mt={2}>
        No Results Found
      </Typography>
      <Typography variant="body1" color="textSecondary">
        Sorry, we couldn't find any results matching your search.
      </Typography>
    </Box>
  );
};

export default NoResultsFound;