
import { Moon } from 'lucide-react';
import { Sun } from 'lucide-react';

export default function Thema({mode,setMode}){
    return(
        <button className='btn-thema' onClick={() => setMode(!mode)}>
            {mode ? <Sun/> : <Moon/>}
        </button>
    )
}