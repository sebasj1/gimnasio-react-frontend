import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CalendarComponent = () => {
  // Crear estado para la fecha seleccionada
  const [selectedDate, setSelectedDate] = useState(null);

  // Función para manejar el cambio de fecha
  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log("Fecha seleccionada:", date); // Aquí se obtiene el valor
  };

  return (
    <div>
      <h1>Selecciona una fecha</h1>
      <DatePicker
        selected={selectedDate} // Fecha actualmente seleccionada
        onChange={handleDateChange} // Maneja el cambio de fecha
        dateFormat="yyyy-MM-dd" // Formato de la fecha
        placeholderText="Haz clic para seleccionar una fecha" // Texto de marcador de posición
      />
      {selectedDate && (
        <p>Fecha seleccionada: {selectedDate.toLocaleDateString()}</p>
      )}
    </div>
  );
};

export default CalendarComponent;
