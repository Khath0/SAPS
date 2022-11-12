import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import React from 'react'


const LET = 'http://localhost:8000/solicitudes/'

const CompShowSolicitudes = ()=> {
    const [solicitudes, setSolicitud] = useState([])
    useEffect( ()=>{
        getSolicitudes()
    },[])

    const getSolicitudes = async ()=> {
        const res = await axios.get(LET)
        setSolicitud(res.data)
    }

    const deleteSolicitud = async (id)=> {
        await axios.delete(`${LET}${id}`)
        getSolicitudes()
        }

    return (
        <div className='MainContainer'>
            <div className='row'>
                <div className='col'>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Prioridad</th>
                                <th>Contenido</th>
                                <th>Categoria</th>
                                <th>FechaCreacion</th>
                            </tr>
                        </thead>
                        <tbody>
                            {solicitudes.map( (solicitud)=>(
                                <tr key={solicitud.ID_Solicitud}>
                                    <td>{solicitud.Prioridad}</td>
                                    <td>{solicitud.Contenido}</td>
                                    <td>{solicitud.Categoria}</td>
                                    <td>{solicitud.createdAt}</td>
                                    
                                    <td>
                                        
                                        <button onClick={ ()=>deleteSolicitud(solicitud.ID_Solicitud)} className='pumba'>Borrar</button>
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

export default CompShowSolicitudes