
import { ChevronRight } from 'lucide-react';
import { ChevronLeft } from 'lucide-react';
import { useState } from 'react';

export default function BGcambio({direccion,setDireccion}){


    return(
        <button className='btn-direction' onClick={() => setDireccion(!direccion)}>
            {direccion ? <ChevronLeft/> : <ChevronRight/>}
        </button>
    )
}   