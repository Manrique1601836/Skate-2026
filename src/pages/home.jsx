
import "./style/view.css"
import BGcambio from "../components/BGcambio"
import BarraMenu from "../components/menu"
import Thema from "../components/thema"

import Nav from "../components/navbar"
import { useState } from "react"

export default function Home(){
    
    /** interaccion del menu */
    const [eyes,setEyes] = useState(false)
    /** interaccion imagenes del home */
    const [direccion, setDireccion] = useState(false)
    /** inteccion del tema */
    const [mode, setMode] = useState(false)

    /** interaccion de la barra de navegacion */
    
    

    return(
        <div className={`homeBG ${direccion ? "bg-right" : "bg-left"}`}>
            { eyes && <Nav/> }
            <BarraMenu
                eyes={eyes}
                setEyes={setEyes}
            />
            <BGcambio
                direccion={direccion}
                setDireccion={setDireccion}
            />
            <Thema
                mode={mode}
                setMode={setMode}
            />
        </div>
    )
}