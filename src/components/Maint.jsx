import React, { useState } from "react";
import { Box, Grid, Divider, Chip, Button } from "@mui/material";
import MultipleSelect from "./MultipleSelect";
import DateAndTimePicker from "./DateAndTimePicker";
import MaintenanceTable from "./MaintenanceTable";
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

const Maint = ({ notifyErr, notifySuc }) => {
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
  const handleAdd = () => {
    console.log(startDate,endDate);
    if (!malfunctionType) {
      notifyErr("Please select a malfuction");
    } else if (!importance) {
      notifyErr("Please select importance");
    } else if (!(endDate.$d - startDate.$d > 1)) {
      notifyErr("End Date must be greater than start date ");
    } else {
      setTableArr([...tableArr, data]);
      setMalfunctionType("");
      setImportance("");
      notifySuc("added successfully");
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
            allowSingleSelection="false"
            data={malfunctionArr}
            value={malfunctionType}
            setValue={setMalfunctionType}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <MultipleSelect
            labelName="Importance"
            allowSingleSelection="true"
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
      <MaintenanceTable data={tableArr} notifySuc={notifySuc}/>
    </Box>
  );
};

export default Maint;
