import "moment";
import React from "react";
import ReactSelect from "react-select";
import MomentUtils from "@date-io/moment";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import { Select, FormControl, InputLabel, MenuItem } from "@material-ui/core";

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
      <ReactSelect
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
      <FormControl>
        <InputLabel htmlFor="age-simple">Age</InputLabel>
        <Select
          inputProps={{
            name: "age",
            id: "age-simple"
          }}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </form>
  );
};
