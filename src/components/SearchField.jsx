import { InputAdornment, TextField } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchField = ({ onChange }) => {
  const handleChange = (event) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <TextField
      sx={{ background: "white" }}
      variant="outlined"
      fullWidth
      placeholder="Search Cryptocurrencies"
      autoFocus
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Search sx={{ color: "#24252D" }} />
          </InputAdornment>
        ),
      }}
      onChange={handleChange}
      size="small"
    />
  );
};

export default SearchField;