

// check if start and end date already exist at table
const isDateConflict = (tableArr, startDate, endDate) => {
  const newStart = startDate.$d;
  const newEnd = endDate.$d;
  for (const item of tableArr) {
    const itemStartDate = item.startDate.$d;
    const itemEndDate = item.endDate.$d;
    if (newStart === itemStartDate && newEnd === itemEndDate) {
      return true;
    }
  }
  return false;
};

// add requested malfuction data at the table
const addData = (
  tableArr,
  setTableArr,
  data,
  notify
) => {
  setTableArr([...tableArr, data]);
  notify("Added successfully", "success");
};

export { isDateConflict, addData };
