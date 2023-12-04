import React, { useState } from "react";
import { Box, Grid, Divider, Chip, Button } from "@mui/material";
import MultipleSelect from "../components/MultipleSelect";
import DateAndTimePicker from "../components/DateAndTimePicker";
import MaintenanceTable from "../components/MaintenanceTable";
import { Add } from "@mui/icons-material";

const malfunctionArr = [
  "Electrical",
  "Plumbing",
  "HVAC",
  "Appliance",
  "Structural",
  "Roofing",
];
const importanceArr = ["Low", "Medium", "Heigh"];

const Home = ({ notify }) => {
  const [malfunctionType, setMalfunctionType] = useState("");
  const [importance, setImportance] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [tableArr, setTableArr] = useState([]);

  const data = {
    malfunctionType,
    importance,
    deliveryDate,
    startDate,
    endDate,
  };

  const isDateConflict = () => {
    for (const item of tableArr) {
      const itemStartDate = item.startDate;
      const itemEndDate = item.endDate;
      if (startDate.$d === itemStartDate.$d && endDate.$d === itemEndDate.$d) {
        return true;
      }
    }
    return false;
  };

  const handleAdd = () => {
    if (!malfunctionType) {
      notify("Please select a malfuction", "error");
    } else if (!importance) {
      notify("Please select importance", "error");
    } else if (!(endDate.$d - startDate.$d > 1)) {
      notify("EndDate must be after startDate", "error");
    } else if (isDateConflict()) {
      notify("start and end date already taken by another malfuction", "error");
    } else {
      setTableArr([...tableArr, data]);
      setMalfunctionType("");
      setImportance("");
      notify("added successfully", "success");
    }
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
