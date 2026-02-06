
import "./style/view.css"

import Home from "./home"
import LogoTipo from "./logo"
import Historia from "./historia"

export default function Views(){
    return(
        <>
            <Home/>
            <LogoTipo/>
            <section id="historia">
                <Historia/>
            </section>
        </>

    )
}