"use client";

import React from "react";

import DatePicker from "react-datepicker";

import Input from "../Input";

const DatePicker2: React.FC<DatePickerProps> = ({ selectedDate, onChange }) => {
  return (
    <div className="relative">
      <DatePicker
        onChange={onChange}
        className="block w-full px-4 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
        customInput={<Input icon="icon-calendar" />}
        placeholderText="Select a date"
        dateFormat="dd/MM/YYYY"
        selected={selectedDate}
      />
    </div>
  );
};

export default DatePicker2;
