import React, { useState } from 'react';
import './Search.css';
import { Calendar } from 'react-date-range';
import "react-date-range/dist/styles.css"; //main style file
import "react-date-range/dist/theme/default.css";//theme css file
import { DateRangePicker } from 'react-date-range';
import { Button } from '@mui/material';
import { People } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';


//DATE PICKER COMPONENT
function Search() {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  return (
    <div className='search'>
      <DateRangePicker ranges={[selectionRange]}
      onChange={handleSelect} />
      <h2>Number of guests
        <People /> </h2>
      <input min={0} defaultValue={2} type='number' />
      <Button onClick={() => navigate('/search')}>Search Airbnb</Button>

    </div>
  )
}

export default Search