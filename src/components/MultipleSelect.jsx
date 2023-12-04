import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";

export default function MultipleSelct({ labelName, data, value, setValue }) {
  const handleChange = (event) => {
    const {
      target: { value: selectedValue },
    } = event;
    setValue(selectedValue);
  };

  return (
    <div>
      <FormControl sx={{ width: "100%" }}>
        <InputLabel id="demo-single-select-label">
          Select {labelName}
        </InputLabel>
        <Select
          labelId="demo-single-select-label"
          id="demo-single-select"
          value={value}
          onChange={handleChange}
          input={<OutlinedInput label={`Select ${labelName}`} />}
          renderValue={(selected) => selected}
        >
          {data.map((name) => (
            <MenuItem key={name} value={name}>
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
