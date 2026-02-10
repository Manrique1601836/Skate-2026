
import "./style/view.css"

import Home from "./home"
import LogoTipo from "./logo"
import Historia from "./historia"
import Setup from "./setup"
import TrickList from "./trickList"
import Cultura from "./cultura"

export default function Views(){
    return(
        <>
            <Home/>
            <LogoTipo/>
            <section id="historia">
                <Historia/>
            </section>
            <section id="setup">
                <Setup/>
            </section>
            <section id="tricklist">
                <TrickList/>
            </section>
            <section id="cultura">
                <Cultura/>
            </section>
        </>

    )
}