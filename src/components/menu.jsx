
import { Menu } from 'lucide-react';
import { X } from 'lucide-react';

export default function BarraMenu({ eyes,setEyes }){
    return(
        <button className='btn-menu' onClick={() => setEyes(!eyes)}>
            {eyes ? <X/> : <Menu/>}
        </button>
    )
}