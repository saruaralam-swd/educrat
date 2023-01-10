import React from 'react';
import Time from 'react-time'

const TimeTest = () => {
  let now = new Date()
  let wasDate = new Date("Thu Jul 18 2013 15:48:59 GMT+0400");

  return(
    <div>
       <p>Today is <Time value={now} format="YYYY/MM/DD s y m s s s" /></p>
        <p>This was <Time value={wasDate} titleFormat="YYYY/MM/DD HH:mm" relative /></p>
    </div>
  )
};

export default TimeTest;