import React, { useState } from "react";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { Divider, Stack, TextField } from "@mui/material";

const MUIDateTimePicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedDateTime, setSelectedDateTime] = useState(null);
  console.log({ selectedDate, selectedTime });
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={[
          "DatePicker",
          "MobileDatePicker",
          "DesktopDatePicker",
          "StaticDatePicker",
        ]}
      >
        <DemoItem label="Desktop variant">
          <DesktopDatePicker defaultValue={dayjs("2022-04-17")} />
        </DemoItem>
        <DemoItem label="Mobile variant">
          <MobileDatePicker defaultValue={dayjs("2022-04-17")} />
        </DemoItem>
        <DemoItem label="Responsive variant">
          <DatePicker defaultValue={dayjs("2022-04-17")} />
        </DemoItem>
        <DemoItem label="Static variant">
          <StaticDatePicker defaultValue={dayjs("2022-04-17")} />
        </DemoItem>
      </DemoContainer>
      <Divider/>
      <Stack spacing={4} sx={{ width: 250 }}>
        <DatePicker
          label="Date picker"
          renderInput={(params) => <TextField {...params} />}
          value={selectedDate}
          onChange={(newValue) => setSelectedDate(newValue)}
        />
        <TimePicker
          label="Time picker"
          renderInput={(params) => <TextField {...params} />}
          value={selectedTime}
          onChange={(newValue) => setSelectedTime(newValue)}
        />
        <DateTimePicker
          label="Date & Time picker"
          renderInput={(params) => <TextField {...params} />}
          value={selectedDateTime}
          onChange={(newValue) => setSelectedDateTime(newValue)}
        />
      </Stack>
    </LocalizationProvider>
  );
};
export default MUIDateTimePicker;
