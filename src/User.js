import React, {useState, useEffect} from "react";

const User = (props) => {
  //value
  //The function to update the entire State
  const [planet, setPlanet] = useState("earth");

//Already present in componentDidMount
  useEffect(() => {
    //Heavy Computation
    console.log("Component Mounting");

  },[]); //[] indicates No further change so lets execute only once.All console los wont be executed again and again.

  //componentDidUpdate
useEffect(() => {
  console.log("Planet updated");
},[planet]);
  console.log(planet);
    return (
      <div>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <button onClick={() => setPlanet("Pluto")}>{planet}</button>
      </div>
    );
  }

//State-> A set of data that an individual compnent holds.
export default User;
