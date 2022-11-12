import React ,{useState, useEffect} from 'react';
import Modal from '../components/Modal';
import '../App.css';
import axios from 'axios';
import Navbar from '../components/NavBar.jsx';
import Post from '../components/PostPF.jsx'
import Pagination from '../components/pagination';


const URIP = 'http://localhost:8000/preguntas/'
const URIS = 'http://localhost:8000/solicitudes/'
const URIPF = 'http://localhost:8000/preguntas_frecuentes/'



export default function Estudiante ()  {
  const [stateModal1,changeModal1] = useState(false);
  const [stateModal2,changeModal2] = useState(false);
  const [stateModal3,changeModal3] = useState(false);
  const [stateModal4,changeModal4] = useState(false);

  const [PrioridadP, setPrioridadP]= useState('');
  const [ContenidoP, setContenidoP]= useState('');
  const [CategoriaP, setCategoriaP]= useState('');
  const [DestinatarioP, setDestinatarioP]= useState('');

  const [PrioridadS, setPrioridadS]= useState('');
  const [CategoriaS, setCategoriaS]= useState('');
  const [ContenidoS, setContenidoS]= useState('');

  const [preguntaF, setPreguntaF] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);


  useEffect( () => {getAllPreguntas_Frecuentes()}, [])
  
  const getAllPreguntas_Frecuentes = async ()=> {
    const res = await axios.get(URIPF)
    setPreguntaF(res.data)
  }

  const soli = async (e) => {
    e.preventDefault()
    await axios.post(URIS, {Prioridad:PrioridadS, Contenido:ContenidoS, Categoria:CategoriaS})
  }

  const preg = async (e) => {
    e.preventDefault()
    await axios.post(URIP, {Prioridad:PrioridadP, Contenido:ContenidoP, Categoria:CategoriaP, Destinatario:DestinatarioP})  
  }

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = preguntaF.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
  return (
    <div> 
      <Navbar></Navbar>
      
      <div className='center'>
        
        <button className="btn" onClick={()=>changeModal1(!stateModal1)}>Ingresar Pregunta</button>
        <button className='btn' onClick={()=>changeModal2(!stateModal2)}>Ingresa solicitud</button>
        <br/>
        <button className='btn' onClick={()=>changeModal3(!stateModal3)}>Preguntas Frecuentes</button>
        <button className='btn' onClick={()=>changeModal4(!stateModal4)}>Estado de consultas</button>
      </div>

        {/* Modal 1  */}
        <Modal
          state= {stateModal1}
          cambiarEstado={changeModal1}
          titulo="Ingresa tu pregunta"
        >
        <div>
          <form onSubmit={preg}>
            <div>
              <input type="text" id='name' required class='input' list='opciones' value={CategoriaP} onChange={(e)=>setCategoriaP(e.target.value)}></input>
              <label for='name' class='input-label'>Categoria</label>
              <datalist id='opciones'>
                <option value= 'Problema inscipcion de ramos'/>
                <option value= 'Horario de Atencion'/>
                <option value= 'Solicitud para creditos extra '/>
                <option value= 'Renovacion de Credencial'/>
                <option value= 'Choque de horarios'/>
              </datalist>
            </div>
            <div >
            <input type="text" id='name' required class='input' list='destinatarios' value={DestinatarioP} onChange={(e)=>setDestinatarioP(e.target.value)}></input>
              <label for='name' class='input-label'>Destinatario</label>
              <datalist id='destinatarios'>
                <option value= 'Secretaria'/>
                <option value= 'Marco Toranzo'/>
                <option value= 'Sergio Hernadez' />
                <option value= 'Hugo Araya' />
                <option value= '' />
              </datalist>
            </div>
            <div >
            <input type="text" id='name' required class='input' list='priority' value={PrioridadP} onChange={(e)=>setPrioridadP(e.target.value)}></input>
              <label for='name' class='input-label'>Prioridad</label>
              <datalist id='priority'>
                <option value= 'Muy poca'/>
                <option value= 'Poca'/>
                <option value= 'Media'/>
                <option value= 'Alta' />
                <option value= 'muy alta' />
              </datalist>
            </div>
            <div >
              <textarea type="textarea" id='name' required class='inputP' value={ContenidoP} onChange={(e)=>setContenidoP(e.target.value)}/>
              <label for='name' class='input-label'>Pregunta</label>
            </div>
            <div justify-content='center'>
            <button type="store" className='ButtonSend'>Enviar</button>
            </div>
            
          </form>
          
        </div>
          
        </Modal>
       
        {/* Modal 2 */}
        <Modal
          state= {stateModal2}
          cambiarEstado={changeModal2}
          titulo="Ingresa tu Solicitud"
        >
        <div>
          <form onSubmit={soli}>
            <div >
              <input type="text" id='name' required class='input' list='opciones' value={CategoriaS} onChange={(e)=>setCategoriaS(e.target.value)}></input>
              <label for='name' class='input-label'>Categoria</label>
              <datalist id='opciones'>
                <option value= 'Cambio de seccion'/>
                <option value= 'Toma de ramos' />
                <option value= 'Problema inscipcion de ramos'/>
                <option value= 'Horario de Atencion'/>
                <option value= 'Solicitud para creditos extra '/>
                <option value= 'Renovacion de Credencial'/>
                <option value= 'Choque de horarios'/>
              </datalist>
            </div>
            <div>
              <input type="text" id='name' required class='input' list='priority' value={PrioridadS} onChange={(e)=>setPrioridadS(e.target.value)}></input>
              <label for='name' class='input-label'>Prioridad</label>
              <datalist id='priority'>
                <option value= 'Muy poca'/>
                <option value= 'Poca'/>
                <option value= 'Media'/>
                <option value= 'Alta' />
                <option value= 'muy alta' />
              </datalist>
            </div>
            <div >
              <textarea type="textarea" id='name' required class='inputP' value={ContenidoS} onChange={(e)=>setContenidoS(e.target.value)}/>
              <label for='name' class='input-label'>Solicitud</label>
            </div>
          
            <div justify-content='center'>
            <button type="store" className='ButtonSend'>Enviar</button>
            </div>
          </form>
        </div>
          
        </Modal>

        {/* Modal 3 */}
        <Modal
          state= {stateModal3}
          cambiarEstado={changeModal3}
          titulo="Preguntas frecuentes"
        >
          
          <Post PregF={currentPosts}/>
          <Pagination postsPerPage={postsPerPage} totalPosts={preguntaF.length} paginate={paginate}/>
        </Modal>
          


        {/* Modal 4 */}
        <Modal
          state= {stateModal4}
          cambiarEstado={changeModal4}
          titulo="Estado de preguntas y solicitudes"
        >
          <div class='subCabecera'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-circle-fill" viewBox="0 0 16 16" color= '#33e933'>
            <circle cx="8" cy="8" r="8"/>
            </svg>
            <p>Respondida</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-circle-fill" viewBox="0 0 16 16" color= '#f1ff34'>
            <circle cx="8" cy="8" r="8"/>
            </svg>
            <p>Alerta</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-circle-fill" viewBox="0 0 16 16" color= '#d1c5fc'>
            <circle cx="8" cy="8" r="8"/>
            </svg>
            <p>En espera</p>
            
          </div>
        </Modal>
    </div>
  );
}
