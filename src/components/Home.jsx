import React, { useEffect, useState } from "react";

export default function Home() {
    const [count, setCount] = useState(0);
    const [bgColor, setBgColor] = useState(''); // Default background color

    const [Color, setColor] = useState('#ffcccc');
    //-----test background---------
    useEffect(() => {
        console.log(`Count is ${count}`);
        if (count === 10) {
          alert('Count reached 10');
          setBgColor('#ffcccc'); // Example color for 10
        } else if (count === 100) {
          alert('Count reached 100');
          setBgColor('#ccffcc'); // Example color for 100
        } else if (count === 1000) {
          alert('Count reached 1000');
          setBgColor('#ccccff'); // Example color for 1000
        } else {
          setBgColor('#ffffff'); // Reset to default if count is not 10, 100, or 1000
        }
        console.log(`Background color set to ${bgColor}`);
      }, [count]);
      //----------------
  
    // useEffect to handle pop-up messages on page load
    useEffect(() => {
      // Show welcome message when the component mounts
      alert('Welcome Message');
    }, []);
  
    useEffect(() => {
      // Show pop-up and change background color when count is 10, 100, or 1000
      if (count === 10) {
        alert('Count reached 10');
        setBgColor('#ffcccc'); // Example color for 10
      } else if (count === 100) {
        alert('Count reached 100');
        setBgColor('#ccffcc'); // Example color for 100
      } else if (count === 1000) {
        alert('Count reached 1000');
        setBgColor('#ccccff'); // Example color for 1000
      } else {
        setBgColor('#ffffff'); // Reset to default if count is not 10, 100, or 1000
      }
    }, [count]);
  
    const incrementCount = () => {
      if (count < 10) {
        setCount(count + 1);
      } else if (count < 100) {
        setCount(count + 10);
      } else if (count < 1000) {
        setCount(count + 100);
      }
    };
  
    const decrementCount = () => {
      if (count > 1000) {
        setCount(count - 100);
      } else if (count > 100) {
        setCount(count - 100);
      } else if (count > 10) {
        setCount(count - 10);
      } else if (count > 0) {
        setCount(count - 1);
      }
    };

  return (
    <>
      <div>
        <div>
          <h1>Count: {count}</h1>

          <button onClick={incrementCount}>Increase Count</button>

          <button onClick={decrementCount}>Decrease Count</button>
        </div>
      </div>
    </>
  );
}
