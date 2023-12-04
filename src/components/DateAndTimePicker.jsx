import { useEffect } from "react";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDateTimePicker } from "@mui/x-date-pickers/MobileDateTimePicker";
import dayjs from "dayjs";

export default function DateAndTimePicker({
  labelName,
  selectedDateTime,
  setSelectedDateTime,
}) {

  useEffect(() => {
    setSelectedDateTime(dayjs());
  }, [setSelectedDateTime]);

  const handleDateTimeChange = (newDateTime) => {
    setSelectedDateTime(newDateTime);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["MobileDateTimePicker"]}>
        <DemoItem label={labelName}>
          <MobileDateTimePicker
            value={selectedDateTime}
            onChange={handleDateTimeChange}
            minDate={dayjs()}
          />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
}
