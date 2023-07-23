import { TextField, Autocomplete } from "@mui/material";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { useState, useEffect } from "react";

function SelectNewsCategory({ newsCatogery, setCategory }) {
  const { data, isFetching } = useGetCryptosQuery(100);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    if (data) {
      const newOptions = data?.data?.coins?.map((coinData) => coinData.name);
      setOptions(["Cryptocurrency", ...newOptions]);
    }
  }, [data]);
  if (isFetching) return "Loading...";
  return (
    <Autocomplete
      value={newsCatogery}
      disablePortal
      id="combo-box-demo"
      size="small"
      onChange={(event, newValue) => {
        setCategory(newValue)
      }}
      options={options}
      sx={{ width: "70%", background: "white" }}
      renderInput={(params) => (
        <TextField {...params} label="Select Category" />
      )}
    />
  );
}
export default SelectNewsCategory;
