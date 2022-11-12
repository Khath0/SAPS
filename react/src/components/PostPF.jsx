import React from "react";
import DropDown from "./DropDown";


const Post = ({ PregF}) =>{

    return <ul >
        {PregF.map( PF=>(
            <tr key={PF.id}>
              <DropDown
                enunciado={PF.Titulo} categoria={PF.Categoria} respuesta={PF.Contenido} />
            </tr>
        ))}
    </ul>
}

export default Post;