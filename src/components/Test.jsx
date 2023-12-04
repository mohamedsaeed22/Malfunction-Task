import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';

export default function Test() {
  const [age, setAge] = React.useState('');
  const [customValue, setCustomValue] = React.useState('');

  const handleSelectChange = (event) => {
    setAge(event.target.value);
  };

  const handleInputChange = (event) => {
    setCustomValue(event.target.value);
  };

  const handleAddCustomValue = () => {
    if (customValue.trim() !== '') {
      setAge(customValue);
      setCustomValue('');
    }
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleSelectChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <TextField
        id="custom-value"
        label="Add Custom Value"
        value={customValue}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
        variant="outlined"
      />
      <button onClick={handleAddCustomValue}>Add Custom Value</button>
    </Box>
  );
}
