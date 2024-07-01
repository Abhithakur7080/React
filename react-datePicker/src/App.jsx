import React, { useState } from "react";
import "./App.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const App = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <div className="App">
      <DatePicker
        showIcon //show or hide icon
        // icon={} //add your custom icon
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat={"dd/MM/yyyy"}
        // minDate={new Date()}//start from today date
        // maxDate={new Date()} //end to today's date
        filterDate={(date) => date.getDay() !== 6 && date.getDay() !== 0} //disable weekend day saturday and sunday
        isClearable // a clear available if date selected
        showYearDropdown
        scrollableYearDropdown // show and hide year dropdown
      />
    </div>
  );
};

export default App;
