import { Route, Routes, BrowserRouter } from "react-router-dom";
import CompShowSolicitudes from "./edicion/ShowSolicitud";
import CompShowPreguntas from "./edicion/ShowPreguntas";
import Estudiante from "./pages/homeEstudiante";
import CompShowPF from "./edicion/ShowPF";
import CompEditPF from "./edicion/EditPF";
import { Login } from "./pages/login";
import {Director} from "./pages/homeDirector";
import { Secretaria } from "./pages/homeSecretaria";
import { Profesor } from "./pages/homeProfesor";
import React from 'react';


export default function App(){
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/alo" element ={<CompShowSolicitudes/>} />
      <Route path="/aca" element ={<CompShowPreguntas/>} />
      <Route path="/login" element ={<Login/>} />
      <Route path="/lol" element ={<CompShowPF/>} />
      <Route path="/prueba/:ID_Preguntas_Frecuente" element ={<CompEditPF/>} />
        <Route path="/" element ={<Estudiante/>} />
        <Route path="/homeEstudiante" element ={<Estudiante/>} />
        <Route path="/homeProfesor" element ={<Profesor/>} />
        <Route path="/homeDirector" element ={<Director/>} />
        <Route path="/homeSecretaria" element ={<Secretaria/>} />
        </Routes>
    </BrowserRouter>
  )
};