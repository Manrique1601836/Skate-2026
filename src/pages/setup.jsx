
import { useState } from "react"
import { SetupSB } from "./setup/SetupSB.JS"
import "./style/setup.css"

import GuiaSetup from "./setup/guiaSetup.jpg"

export default function Setup(){

    const [verSetup, setVerSetup] = useState(null)
    
    return(
        <>
            <h1>Setup</h1>

            <div className="setup-pri">
                {SetupSB.map((item) => (
                    <ul key={item.id} className="setup-item">
                        <li
                            className="setup-title" 
                            onClick={() => setVerSetup(verSetup === item.id ? null : item.id, 1500)}>
                            {item.nombre}
                        </li>
                        <div className={`img-wrapper ${verSetup === item.id ? "open" : ""}`}>
                            <img className="img-setup" src={item.img} />
                        </div>
                    </ul>
                ))}
            </div>
            
            <img src={GuiaSetup} alt="guia" className="guia"/>
        </>
    )
}