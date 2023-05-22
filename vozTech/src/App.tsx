import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './assets/componentes/estaticos/navbar/Navbar';
import Footer from './assets/componentes/estaticos/footer/Footer';
import { Grid } from "@material-ui/core";
import Home from './assets/paginas/home/Home';
import './App.css'
import Login from './assets/paginas/login/Login';
import Cadastro from './assets/paginas/cadastro/Cadastro';
// import ListaTema from './assets/componentes/estaticos/temas/listatemas/ListaTema';
// import ListaPostagem from './assets/componentes/postagens/listapostagens/ListaPostagem';

function App() {
  return (

    <Router>
      <Navbar />
      <div style={{minHeight: "100vh"}}>
        <Routes>
        
          <Route path="/" element={<Login />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/cadastro" element={<Cadastro />}/>
          {/* <Route path="/temas" element={<ListaTema />}/>
          <Route path="/posts" element={<ListaPostagem />}/> */}
        </Routes>
        </div>
      <Footer />
    </Router>
  );
}

export default App;