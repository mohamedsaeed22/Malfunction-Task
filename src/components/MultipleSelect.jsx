import {
  OutlinedInput,
  InputLabel,
  MenuItem,
  FormControl,
  ListItemText,
  Select,
} from "@mui/material";

export default function MultipleSelct({ labelName, data, value, setValue }) {

  // get selected value from select 
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
