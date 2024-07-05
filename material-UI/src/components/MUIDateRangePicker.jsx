import React, { useState } from "react";
import dayjs from "dayjs";
//x-date-pickers
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
// //x-date-pickers-pro
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { DateTimeRangePicker } from "@mui/x-date-pickers-pro/DateTimeRangePicker";
import { Box, TextField } from "@mui/material";
// import { DateRangePicker } from "@mui/lab";

const today = dayjs();
const yesterday = dayjs().subtract(1, "day");
const todayStartOfTheDay = today.startOf("day");

const MUIDateRangePicker = () => {
  const [value, setValue] = useState([null, null]);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={[
          "DatePicker",
          "DateTimePicker",
          "TimePicker",
          "DateRangePicker",
          "DateTimeRangePicker",
        ]}
      >
        <DemoItem label="DatePicker">
          <DatePicker
            defaultValue={yesterday}
            disablePast
            views={["year", "month", "day"]}
          />
        </DemoItem>
        <DemoItem label="TimePicker">
          <TimePicker defaultValue={todayStartOfTheDay} disablePast />
        </DemoItem>
        <DemoItem label="DateTimePicker">
          <DateTimePicker
            defaultValue={yesterday}
            disablePast
            views={["year", "month", "day", "hours", "minutes"]}
          />
        </DemoItem>
        <DemoItem label="DateRangePicker" component="DateRangePicker">
          <DateRangePicker defaultValue={[yesterday, today]} disablePast />
        </DemoItem>
        <DemoItem label="DateTimeRangePicker" component="DateTimeRangePicker">
          <DateTimeRangePicker defaultValue={[yesterday, today]} disablePast />
        </DemoItem>
      </DemoContainer>
      {/* <Box width={500}>
        <DateRangePicker
          startText="Check-in"
          endText="Check-out"
          value={value}
          onChange={(newValue) => setValue(newValue)}
          renderInput={(startProps, endProps) => (
            <>
              <TextField {...startProps} />
              <Box sx={{ mx: 2 }}>to</Box>
              <TextField {...endProps} />
            </>
          )}
        />
      </Box> */}
    </LocalizationProvider>
  );
};
export default MUIDateRangePicker;
