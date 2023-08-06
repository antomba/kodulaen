import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const TenureSelect = ({ data, setData }) => {
  const handleChange = (event) => {
    setData({
      ...data,
      loanTerm: event.target.value,
    });
  };
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Laenu tähtaeg</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={data.loanTerm}
        label="Tenure"
        onChange={handleChange}
      >
        <MenuItem value={10}>10 aastat</MenuItem>
        <MenuItem value={20}>20 aastat</MenuItem>
        <MenuItem value={30}>30 aastat</MenuItem>
      </Select>
    </FormControl>
  );
};

export default TenureSelect;
