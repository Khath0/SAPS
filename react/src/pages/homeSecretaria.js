import React, {useState} from 'react';
import Modal from '../components/Modal.jsx';
import '../App.css';
import axios from 'axios';
import Navbar from '../components/NavBar.jsx';
import { NavLink } from 'react-router-dom'
/*import Login from './pages/login';*/
const URI = 'http://localhost:8000/preguntas_frecuentes/'
const URIP = 'http://localhost:8000/preguntas/'
const URIS = 'http://localhost:8000/solicitudes/'




export function  Secretaria  () {
  const [stateModal1,changeModal1] = useState(false);
  const [stateModal2,changeModal2] = useState(false);
  const [stateModal3,changeModal3] = useState(false);
  const [stateModal4,changeModal4] = useState(false);

  const [Titulo1, setTitulo1]= useState('')
  const [Categoria1, setCategoria1]= useState('')
  const [Contenido1, setContenido1]= useState('');


  const store = async (e) => {
      e.preventDefault()
      await axios.post(URI, {Titulo:Titulo1,Categoria:Categoria1, Contenido:Contenido1})
      
    }
  
  return (
    <div>
      <Navbar></Navbar>
      <div>
      <button className='btn' onClick={()=>changeModal1(!stateModal2)}>Ingresa Preguntas Frecuentes</button>
        <button className="btn" onClick={()=>changeModal2(!stateModal1)}><NavLink to='/aca' >Revisar Preguntas'</NavLink></button>
        <br/>
        <button className='btn' onClick={()=>changeModal4(!stateModal4)}>Estadisticas</button>
        </div>

        {/* Modal 1  */}
        <Modal
          state= {stateModal1}
          cambiarEstado={changeModal1}
          titulo="Complete los campos"
        >
        <div>
          <form onSubmit={store}>
            <div>
              <input type="text" id='name' required class='input'  value={Titulo1} onChange={(e)=>setTitulo1(e.target.value)}></input>
              <label for='name' class='input-label'>Titulo</label>
            
            </div>
            <div >
            <input type="text" id='name' required class='input' list='Categoria' value={Categoria1} onChange={(e)=>setCategoria1(e.target.value)}></input>
              <label for='name' class='input-label'>Categoria</label>
              <datalist id='Categoria'>
                <option value= 'Secretaria'/>
                <option value= 'Marco Toranzo'/>
                <option value= 'Sergio Hernadez' />
              </datalist>
            </div>
            <div >
            <input type="text" id='name' required class='input' value={Contenido1} onChange={(e)=>setContenido1(e.target.value)}></input>
              <label for='name' class='input-label'>Contenido</label>
              
            </div>
           
            <div justify-content='center'>
            <button type="store" className='ButtonSend'>enviar</button>
            </div>
            
          </form>
          
        </div>
          
        </Modal>
      

      
            
          
        
    </div> 


  );
}

