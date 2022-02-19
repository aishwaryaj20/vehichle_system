import React, { useEffect, useState } from "react";
import './login.css';
import './vehichle.css';
const VehicleList = () => {
  const [vehichleName, setVehichleName] = useState("");
  const [vehichleModel, setVehichleModel] = useState("");
  const [vehichlerides, setVehichlerides] = useState("");

  const [newEntry, setNewEntry] = useState([]);

  const [page, setPage] = useState(1);

 const submitForm = (e)=>{
     e.preventDefault();


     
const allEntry = {vehichleName:vehichleName, vehichleModel:vehichleModel}
 
setNewEntry([...newEntry, allEntry ])
}  
const getData = () => {
  //  e.preventDefault();
    fetch(`http://localhost:3001/vehichle?_page=${page}&_limit=3`)
    .then((data) => data.json())
    .then((response) => {
        setNewEntry(response);
      // setLoading(false);
    });
};

useEffect (() =>  {
    getData()

},[page])
 return (
    <>
     
<div>


{
    newEntry.map((current,i)  => {

        return (

            <div key={i}  className="flex-container">
            <p >Vehichle Name : {current.vehichleName} 
            <br/>Vehichle Model :  {current.vehichleModel} <br/> Rides: {current.vehichlerides}</p>
           
            </div>
        )
    } )
}




</div>

<div>
<button className="bottom"  onClick={() => setPage (page-1)} >Prev</button>
<button className="bottom" onClick={() => setPage (page+1)}>Next</button>
</div>

    </>
  );
};

export default VehicleList;
