
import { ScripV } from "../video/trickList/scriptV"
import LupaTrick from "../components/lupaTrick"
import { useState } from "react";

import "./style/trick.css"

export default function TrickList(){
    
    const [busqueda, setBusqueda] = useState("");

    const resultTrucos = ScripV.filter((item) =>
        item.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );

    return(
        <>
            <h1>Trick List</h1>
            <div className="buscador">
                <LupaTrick onBuscar={(texto) => setBusqueda(texto)} className="icon-lupa"/>
            </div>
            
            <div className="trick-list-if">
                {resultTrucos.map((item) => (
                    <div className="trick-gd" key={item.id}>
                        <video
                            src={item.video}
                            controls
                            className="v-trick"
                        />
                        <h1>{item.nombre}</h1>
                    </div>
                ))}

                {resultTrucos.length === 0 && (
                    <p>Sin resultados de Trick</p>
                )}
            </div>

        </>
    )
}