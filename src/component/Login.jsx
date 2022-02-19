import React, { useEffect, useState } from "react";
import './login.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [newEntry, setNewEntry] = useState([]);

  const [page, setPage] = useState(1);

 const submitForm = (e)=>{
     e.preventDefault();


     
const allEntry = {email:email, password:password}
 
setNewEntry([...newEntry, allEntry ])
}  
const getData = () => {
  //  e.preventDefault();
    fetch(`http://localhost:3001/login?_page=${page}&_limit=3`)
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
    
        <label htmlFor="email">Email</label>&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
          />
        </div>
       <br/>
       <br/>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="text"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
          />
        </div>
        <br />
        <button
        className="submitbtn" type="submit"
        onClick={() => {
          const data = { status: false,   email, password };
          fetch(" http://localhost:3001/login", {
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


    </>
  );
};

export default Login;




// {
//     newEntry.map((current,i)  => {

//         return (

//             <div key={i}>
//             <p >{current.email}</p>
//             <p>{current.password}</p>
//             </div>
//         )
//     } )
// }

// <div>

// <button  onClick={() => setPage (page-1)} >Prev</button>
// <button onClick={() => setPage (page+1)}>Next</button>

// </div>