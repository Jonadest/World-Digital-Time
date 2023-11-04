import React, { useState, useEffect } from "react";
import timeZone from "./timeZone"; // Import the new timeZone array

const Time = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000); // 1000 milliseconds (1 second)

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  // Define a function to format time based on the time zone
  const getFormattedTime = (time, timeZone) => {
    return time.toLocaleTimeString(undefined, {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZone: timeZone,
    });
  };

  const localTime = time.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <div className="clock-body">
    <div className="local-time">
    <h5>Local Time</h5>
    <h2 className="text-center">{localTime}</h2>
    <p className="jona">By Jonadest</p>
    <br />
  </div>
    <div className="clock">
     
      
      {timeZone.map((zone, index) => (
        <div key={index} className={zone.city}>
          <p>{zone.city}</p>
          <h2>{getFormattedTime(time, zone.zone)}</h2>
        </div>
      ))}
    </div>
    </div>
    
  );
};

export default Time;
