import React, { useState } from 'react'
import Calendar from 'react-calendar'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'react-calendar/dist/Calendar.css';
import './App.css'

function App() {
  const [value, setValue]= useState("Mon Mar 06 2024 20:39:05 GMT-0500 (Eastern Standard Time)")


  const enabledDates = [
    new Date(2024, 2, 10), // March 10, 2024
    new Date(2024, 2, 15), // March 15, 2024
    // Add more dates as needed
  ];

  // Function to determine whether a date should be enabled
  const tileDisabled = ({ date }) => {
    // Check if the current date is in the enabledDates array
    return !enabledDates.some((enabledDate) =>
      enabledDate.getDate() === date.getDate() &&
      enabledDate.getMonth() === date.getMonth() &&
      enabledDate.getFullYear() === date.getFullYear()
    );
  };




  const coloredDates = [
    { date: new Date(2024, 2, 10), color: 'green' }, // March 10, 2024 - green
    { date: new Date(2024, 2, 15), color: 'blue' },  // March 15, 2024 - blue
    // Add more dates and colors as needed
  ];
   // Function to determine the class name for each tile
   const tileClassName = ({ date }) => {
    // Find the color for the current date
    const coloredDate = coloredDates.find((coloredDate) =>
      coloredDate.date.getDate() === date.getDate() &&
      coloredDate.date.getMonth() === date.getMonth() &&
      coloredDate.date.getFullYear() === date.getFullYear()
    );

    // If a color is found, return the class name with the color
    if (coloredDate) {
      return coloredDate.color;
    } else {
      return '';
    }
  };



 
  return (
    <>
    {/* <Calendar onChange={setValue} value={["Mon Mar 06 2024 20:39:05 GMT-0500 (Eastern Standard Time)", "Mon Mar 11 2024 20:39:05 GMT-0500 (Eastern Standard Time)"]} goToRangeStartOnSelect={false} />
    */}
    <Calendar tileDisabled={tileDisabled} /> 
   <Calendar tileClassName={tileClassName} />
 
     
    </>
  )
}

export default App
