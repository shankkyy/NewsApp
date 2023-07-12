

import './App.css';
import React from 'react'

import { useAuth0 } from "@auth0/auth0-react";


import Navbar from './Components/Navbar'
import News from './Components/News';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
Navigate,

} from "react-router-dom";

function App() {
  const { loginWithRedirect , isAuthenticated} = useAuth0();

  
  return (

    <div>
    <Router>

      <Navbar/>
      <div class="text-center" style={{backgroundColor : "#F8F9FA"}}>
         <h1>Top headlines</h1>
      </div>
  

    <Routes>

   <Route exact path="/" element={<News  key ="general"country ="in" category= "general"/>}>  </Route>
  <Route exact path="/sports" element={<News  key ="sports" country ="in" category= "sports"/>}>  </Route>
  <Route exact path="/general" element={<News  key ="sports" country ="in" category= "general"/>}>  </Route>
  <Route exact path="/technology" element={<News key ="technology" country ="in" category= "technology"/>}>  </Route>
  <Route exact path="/entertainment" element={ <News  key ="entertainment" country ="in" category= "entertainment"/>}> </Route>
  <Route exact path="/health" element={<News  key ="health" country ="in" category= "health"/>}>  </Route>
  <Route  exact path="/science" element={ <News   key ="science" country ="in" category= "science"/>}> </Route>
  <Route exact path="/business" element={<News  key ="business" country ="in" category= "business"/>}>  </Route>
 

        </Routes>
        </Router>
    </div> 
  );


}



export default App;
