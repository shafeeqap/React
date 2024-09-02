import React, { useState } from "react";
import DatePicker from "react-date-picker";
import 'react-date-picker/dist/DatePicker.css'

const ReactDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <div>
      <DatePicker
        value={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        format="dd/MM/yyyy"
      />
    </div>
  );
};

export default ReactDatePicker;
