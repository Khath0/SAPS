import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import React from 'react'


const LET = 'http://localhost:8000/preguntas_frecuentes/'

const CompShowPF = ()=> {
    const [preguntas_frecuentes, setPreguntasFrecuentes] = useState([])
    useEffect( ()=>{
        getPreguntasFrecuentes()
    },[])

    const getPreguntasFrecuentes = async ()=> {
        const res = await axios.get(LET)
        setPreguntasFrecuentes(res.data)
    }

    const deletePreguntasFrecuentes = async (id)=> {
        await axios.delete(`${LET}${id}`)
        getPreguntasFrecuentes()
        }

    return (
        <div className='MainContainer'>
            <div className='row'>
                <div className='col'>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Titulo</th>
                                <th>Categoria</th>
                                <th>Contenido</th>
                                <th>ID_Carrera</th>
                                <th>FechaCreacion</th>
                            </tr>
                        </thead>
                        <tbody>
                            {preguntas_frecuentes.map( (pregunta_frecuente)=>(
                                <tr key={pregunta_frecuente.ID_Pregunta_Frecuentes}>
                                    <td>{pregunta_frecuente.Titulo}</td>
                                    <td>{pregunta_frecuente.Categoria}</td>
                                    <td>{pregunta_frecuente.Contenido}</td>
                                    <td>{pregunta_frecuente.ID_Carrera}</td>
                                    
                                    <td>{pregunta_frecuente.createdAt}</td>
                                    
                                    <td>
                                        
                                        <button onClick={ ()=>deletePreguntasFrecuentes(pregunta_frecuente.ID_Preguntas_Frecuentes)} className='pumba'>Borrar</button>
                                    </td>
                                

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default CompShowPF