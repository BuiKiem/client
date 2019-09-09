import React from "react";
import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" }
];

export const SearchHotelForm = () => (
  <form>
    <Select
      id="component-destination"
      options={options}
      placeholder="City, hotel, place to go"
    />
  </form>
);
