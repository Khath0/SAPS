import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import React from 'react';


const URI = "http://localhost:8000/preguntas_frecuentes/"

const CompEditPF = () => {
    const [Titulo3,setTitulo3] =useState('')
    const [Categoria3, setCategoria3] = useState('')
    const [Contenido3, setContenido3] = useState('')
    const [ID_Carrera3, setID_Carrera3] = useState('')
    const navigate= useNavigate()

    const {ID_Preguntas_Frecuentes} = useParams()

    const update= async (e)=> {
        e.preventDefault()
        await axios.put(URI+ID_Preguntas_Frecuentes, {
            Titulo:Titulo3,
            Categoria:Categoria3,
            Contenido:Contenido3,
            ID_Carrera:ID_Carrera3
        })
        navigate('/')
    }

    useEffect( ()=> {
        getPfId ()
    },[])

    const getPfId  = async ()=> {
        const res = await axios.get(URI+ID_Preguntas_Frecuentes)
        setTitulo3(res.data.Titulo)
        setCategoria3(res.data.Categoria)
        setContenido3(res.data.Contenido)
        setID_Carrera3(res.data.ID_Carrera)
    }

    return(
        <div>
            <h3>Edit POST</h3>
            <form onSubmit={update}>
                <div className="mb-3">
                    <label className="form-label">TiTulo</label>
                    <textarea value={Titulo3} onChange={(e)=>setTitulo3(e.target.value)} type="text" className="form-control"></textarea>
                </div>
                <div className="mb-3">
                    <label className="form-label">Categoria</label>
                    <textarea value={Categoria3} onChange={(e)=>setCategoria3(e.target.value)} type="text" className="form-control"></textarea>
                </div>
                <div className="mb-3">
                    <label className="form-label">Contenido</label>
                    <textarea value={Contenido3} onChange={(e)=>setContenido3(e.target.value)} type="text" className="form-control"></textarea>
                </div>
                <div className="mb-3">
                    <label className="form-label">ID_Carrera</label>
                    <input value={ID_Carrera3} onChange={(e)=>setID_Carrera3(e.target.value)} type="number" className="form-control"></input>
                </div>
                <button type="submit" className="pumba">Store</button>
            </form>
        </div>
    )

}

export default CompEditPF