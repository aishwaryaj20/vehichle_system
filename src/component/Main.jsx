import React, { useEffect, useState } from "react";
import './login.css';

const Main = () => {
  const [vehichleName, setVehichleName] = useState("");
  const [vehichleModel, setVehichleModel] = useState("");

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
      <form action="" onSubmit={submitForm}>
      <div className="main">
      
        <div>
    
        <label htmlFor="vehichleName">vehichleName</label>&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="text"
            name="vehichleName"
            value={vehichleName}
            onChange={(e) => setVehichleName(e.target.value)}
            id="vehichleName"
          />
        </div>
       <br/>
       <br/>
        <div>
          <label htmlFor="vehichleModel">vehichleModel</label>
          <input
            type="text"
            name="vehichleModel"
            value={vehichleModel}
            onChange={(e) => setVehichleModel(e.target.value)}
            id="vehichleModel"
          />
        </div>
        <br />
        <button
        className="submitbtn" type="submit"
        onClick={() => {
          const data = { status: false,   vehichleName, vehichleModel };
          fetch(" http://localhost:3001/vehichle", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
              "content-type": "application/json",
            },
          })
          
          .then(getData);
        }}
      >
        Add
      </button>

        </div>
      </form>
<div>


{
    newEntry.map((current,i)  => {

        return (

            <div key={i}>
            <p >{current.vehichleName}</p>
            <p>{current.vehichleModel}</p>
            </div>
        )
    } )
}


<button  onClick={() => setPage (page-1)} >Prev</button>
<button onClick={() => setPage (page+1)}>Next</button>

</div>

    </>
  );
};

export default Main;
