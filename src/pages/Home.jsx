import React, { useState } from "react";
import { Box, Grid, Divider, Chip, Button } from "@mui/material";
import MultipleSelect from "../components/MultipleSelect";
import DateAndTimePicker from "../components/DateAndTimePicker";
import MaintenanceTable from "../components/MaintenanceTable";
import { Add } from "@mui/icons-material";
import { isDateConflict, addData } from "../utils/dataHelper";

const malfunctionArr = [
  "Electrical",
  "Plumbing",
  "HVAC",
  "Appliance",
  "Structural",
  "Roofing",
];
const importanceArr = ["Low", "Medium", "High"];

const Home = ({ notify }) => {
  const [malfunctionType, setMalfunctionType] = useState("");
  const [importance, setImportance] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [tableArr, setTableArr] = useState([]);

  const handleAdd = () => {
    if (!malfunctionType) {
      notify("Please select a malfunction", "error");
      return;
    }
    if (!importance) {
      notify("Please select importance", "error");
      return;
    }
    if (!(endDate.$d - startDate.$d > 1)) {
      notify("End Date must be after Start Date", "error");
      return;
    }
    if (isDateConflict(tableArr, startDate, endDate)) {
      notify("Start and End date overlap with existing data", "error");
      return;
    }
    const data = {
      malfunctionType,
      importance,
      deliveryDate,
      startDate,
      endDate,
    };
    addData(tableArr, setTableArr, data, notify);
    setMalfunctionType("");
    setImportance("");
  };

  return (
    <Box sx={{ marginTop: "20px" }}>
      <Divider>
        <Chip label="Malfunction info" />
      </Divider>
      <Grid
        container
        rowSpacing={2}
        mb={3}
        mt={3}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item xs={12} sm={6}>
          <MultipleSelect
            labelName="Malfunction"
            data={malfunctionArr}
            value={malfunctionType}
            setValue={setMalfunctionType}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <MultipleSelect
            labelName="Importance"
            data={importanceArr}
            value={importance}
            setValue={setImportance}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <DateAndTimePicker
            labelName="Deliver Date"
            selectedDateTime={deliveryDate}
            setSelectedDateTime={setDeliveryDate}
          />
        </Grid>
      </Grid>
      <Divider>
        <Chip label="Internal info" />
      </Divider>
      <Grid
        container
        rowSpacing={1}
        mb={3}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item xs={12} sm={6}>
          <DateAndTimePicker
            labelName="Start Date"
            selectedDateTime={startDate}
            setSelectedDateTime={setStartDate}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <DateAndTimePicker
            labelName="End Date"
            selectedDateTime={endDate}
            setSelectedDateTime={setEndDate}
          />
        </Grid>
      </Grid>
      <Box textAlign="right">
        <Button variant="contained" onClick={handleAdd} endIcon={<Add />}>
          Add
        </Button>
      </Box>
      <MaintenanceTable data={tableArr} setData={setTableArr} notify={notify} />
    </Box>
  );
};

export default Home;
