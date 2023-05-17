import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './assets/componentes/estaticos/navbar/Navbar';
import Footer from './assets/componentes/estaticos/footer/Footer';
import { Grid } from "@material-ui/core";
import Home from './assets/paginas/home/Home';
import './App.css'
import Login from './assets/paginas/login/Login';



function App() {
  return (

    <Router>
      <Navbar />
      <div style={{minHeight: "100vh"}}>
        <Routes>
        
          <Route path="/" element={<Login />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/home" element={<Home />}/>

        </Routes>
        </div>
      <Footer />
    </Router>
  );
}

export default App;