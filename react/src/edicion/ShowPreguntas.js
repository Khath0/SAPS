import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import React from 'react'


const LET = 'http://localhost:8000/preguntas/'

const CompShowPreguntas = ()=> {
    const [preguntas, setPreguntas] = useState([])
    useEffect( ()=>{
        getPreguntas()
    },[])

    const getPreguntas = async ()=> {
        const res = await axios.get(LET)
        setPreguntas(res.data)
    }

    const deletePregunta = async (id)=> {
        await axios.delete(`${LET}${id}`)
        getPreguntas()
        }

    return (
        <div className='MainContainer'>
            <div className='row'>
                <div className='col'>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th >Prioridad</th>
                                <th>Contenido</th>
                                <th>Categoria</th>
                                <th>Destinatario</th>
                                <th>FechaCreacion</th>
                            </tr>
                        </thead>
                        <tbody>
                            {preguntas.map( (pregunta)=>(
                                <tr key={pregunta.ID_Pregunta}>
                                    <td>{pregunta.Prioridad}</td>
                                    <td>{pregunta.Contenido}</td>
                                    <td>{pregunta.Categoria}</td>
                                    <td>{pregunta.Destinatario}</td>
                                    <td>{pregunta.createdAt}</td>
                                    
                                    <td>
                                        
                                        <button onClick={ ()=>deletePregunta(pregunta.ID_Pregunta)} className='pumba'>Borrar</button>
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

export default CompShowPreguntas