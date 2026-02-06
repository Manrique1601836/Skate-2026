import "./style/historia.css"
import KB from "../img/KB.svg"
import Kick from "../img/KickB.svg"
import { ImgHistoria } from "../img/historia/imgHistoria"

export default function Historia(){
    return(
        <>
            <h1>
                La Evolución del <br />SkateBoard 
            </h1>
            <div className="img-his">
                
                <img src={Kick} alt="kickB" className="KickB"/>
                <img src={KB} alt="DisneyKick" className="DisneyKick"/>

            </div>

            <div className="h-skate">
                {ImgHistoria.map((item) => (
                    <div className="img-skate" key={item.id}>
                        <p>{item.nombre}</p>
                        <div className="img-group">
                            {item.imagen.map((img) => (
                                <div className="img-s">
                                    <p>{img.subName}</p>
                                    <img
                                        key={img.subId}
                                        src={img.subImg}
                                        alt={img.subName}
                                        className="img-h"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

            </div>
        </>
    )
}