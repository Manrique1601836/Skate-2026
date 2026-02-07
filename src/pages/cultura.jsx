
import "./style/cultura.css"

import Regular from "./cultura/Regular.jpg"
import PosR from "./cultura/posR.jpg"

import Goofy from "./cultura/Goofy.jpg"
import PosG from "./cultura/posG.jpg"

import { CulturaSK } from "./cultura/culturaSka"

export default function Cultura(){
    return(
        <>
            <h1>Cultura</h1>
            <div className="box-cultura-RG">

                <div className="box-regular">
                    <div className="r-img">
                        <img src={Regular} alt="regular" className="img-posicion-skater"/>
                    </div>
                    <div className="r-text-p">
                        <img src={PosR} alt="" className="posSk"/>
                        <p>Pie izquierdo en el nose y el derecho en el tail</p>
                    </div>
                </div>

                <div className="box-goofy">
                    <div className="g-img">
                        <img src={Goofy} alt="goofy" className="img-posicion-skater"/>
                    </div>
                    <div className="g-text-p">              
                        <p>Pie derecho en el nose y el izquierdo en el tail</p>
                        <img src={PosG} alt="" className="posSk"/>
                    </div>
                </div>
            </div>

            <div className="imgs-skt">
                <br />
                <h1>Comunidad</h1>
                <br />
                {CulturaSK.map((item) => (
                    <img
                        src={item.img}
                        className="img-sk"
                    />
                ))}
            </div>
        </>
    )
}