
import Logo from "../img/logo.png"
import Tonny from "../video/Tonny.mp4"

export default function LogoTipo(){
    return(
        <div className="logoK">
            <div className="logo-1">
                {/* <img src={Logo} alt="logo-skater" className="logo-skater"/> */}
                <h1>KickWave</h1>
            </div>
            <div className="logo-2">
                <video 
                    src={Tonny} 
                    controls
                    loop
                    className="media-a"
                />
            </div>
        </div>
    )
}