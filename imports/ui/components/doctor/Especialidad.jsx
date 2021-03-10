import React ,{ useState, useEffect } from 'react';
import axios from 'axios';

const Especialidad = () => {

    const[especialidades, setEspecialidades] = useState([]);

    useEffect( () => {
        const getEspecialidades = async() => {
          const respuesta = await axios.get('https://gist.githubusercontent.com/rodcisal/ef7839215d8d17ff9cf07b19e5e7593d/raw/718370f384f8dbcff1548933df45ea3394a223d3/especialidadesMedicas.json');
          setEspecialidades(respuesta.data)
        }
        getEspecialidades()
      },[]);

    return(
        <>
            <option value="">Seleccione Especialidad</option>
        {especialidades.map(e =>(
            <option value={e.nombre}>{e.nombre}</option>
        ))}
        </>
    )
}
export default Especialidad;