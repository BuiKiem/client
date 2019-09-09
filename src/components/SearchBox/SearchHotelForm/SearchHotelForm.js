import "moment";
import React from "react";
import Select from "react-select";
import MomentUtils from "@date-io/moment";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" }
];

export const SearchHotelForm = () => {
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  function handleDateChange(date) {
    setSelectedDate(date);
  }

  return (
    <form>
      <Select
        id="component-destination"
        options={options}
        placeholder="City, hotel, place to go"
      />
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <KeyboardDatePicker
          disablePast
          disableToolbar
          variant="inline"
          format="DD/MM/YYYY"
          margin="normal"
          value={selectedDate}
          onChange={handleDateChange}
          id="date-picker-inline"
          label="Check-in"
        />
      </MuiPickersUtilsProvider>
    </form>
  );
};
