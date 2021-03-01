import React, { useState, useEffect } from 'react';
import axios from 'axios';
 
function Caller() {
  const [data, setData] = useState([]);
 
  useEffect(async () => {
    const result = await axios(
      'http://localhost:10000/all',
    );
 
    console.log("hola", result.data)
    setData(result.data);
  }, []);
 
  return (
    <ul>
      {data.map(item => (
        <li key={item.Id}>
          <h1>{item.desc}</h1>
        </li>
      ))}
    </ul>
  );
}
 
export default Caller;