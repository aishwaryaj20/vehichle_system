import React, { useState, useEffect } from 'react';
import './vehichle.css';
const vehichle =  [
    {
      "status": false,
      "vehichleName": "Alto",
      "vehichleModel": "Axi",
      "id": 1,
      "vehichlerides": 3
    },
    {
      "status": false,
      "vehichleName": "Waganor",
      "vehichleModel": "Vxi",
      "id": 2,
      "vehichlerides": 4
    },
    {
      "status": false,
      "vehichleName": "Swift",
      "vehichleModel": "Lxi",
      "id": 3,
      "vehichlerides": 4
    },
    {
      "status": false,
      "vehichleName": "Baleno",
      "vehichleModel": "Lxi",
      "id": 4,
      "vehichlerides": 5
    },
    {
      "status": false,
      "vehichleName": "Nexon",
      "vehichleModel": "Xxi",
      "id": 5,
      "vehichlerides": 1
    },
    {
      "status": false,
      "vehichleName": "Zen",
      "vehichleModel": "Xvi",
      "id": 6,
      "vehichlerides": 2
    },
  ];


function Sort() {
  const [data, setData] = useState([]);
  const [sortType, setSortType] = useState('');
  useEffect(() => {
    const sortArray = type => {
      const types = {
        vehichleName: 'vehichleName',
        vehichleModel: 'vehichleModel',
        vehichlerides: 'vehichlerides',
      };
      const sortProperty = types[type];
      const sorted = [...vehichle].sort((a, b) => b[sortProperty] - a[sortProperty]);
      setData(sorted);
    };
    sortArray(sortType);
  }, [sortType]); 


  return (
    <div className="btnnn">
      <select onChange={(e) => setSortType(e.target.value)}> 
        
      <option value="vehichleName">Name</option>
        
      <option value="vehichleModel">Model</option>
      
      <option value="vehichlerides">Rides</option>
     
      </select>
     <br/>
     <br/>
      {data.map(items => (
        <div key={items.id}  className="flex-containerr">
          <p>{`Name: ${items.vehichleName}`}
          <br/>
         {`Model: ${items.vehichleModel}`}
         <br/>
         {`Rides: ${items.vehichlerides}`}
         <br/>
         {`No of Rides: ${items.id}`}  <br/></p>
        </div>
      ))}
    </div>
  );
}
export default Sort;