import axios from 'axios' ;
import { useEffect, useState } from 'react';

import './App.css';

function App() {
  const[name ,setName] =useState ("")
useEffect (() => {

  const options = {
    headers:{
      "x-rapidapi-key": "9aded7964dmsh8372c027f257f8ep1e9819jsnc5e51fa032f8",
      "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      "useQueryString": true
  }
}
  
  axios
  .get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/extrac",options) 
  .then (Response=>{
setName(Response)
console.log(Response)
  })
 .catch (error => {
   console.log(error) 
 },[name])
 
})
  return (
    <div className="App">
     
    </div>
  );
}

export default App;

