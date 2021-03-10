import React,{useEffect, useState} from 'react';
import { Container, Row } from 'react-bootstrap';
import  DoctorsCollection  from '../api/DoctorsCollection';
import  DoctorForm  from '../ui/components/doctor/DoctorForm';
import DoctorList from '../ui/components/doctor/DoctorList';
import Header from '../ui/components/layout/Header'
import axios from 'axios';

const App = () => {

  const [doctor, setDoctor] = useState({
    nombres:'',
    apellidoPaterno:'',
    apellidoMaterno:'',
    rut:'',
    especialidad:''
  });

  const[especialidades, setEspecialidades] = useState([]);
  const[mensaje, setMensaje] = useState('');
  const[claseMensaje, setClaseMensaje] = useState('');
  const[showBtnUpdate, setShowBtnUpdate] = useState(false)

  useEffect( () => {
    const getEspecialidades = async() => {
      const respuesta = await axios.get('https://gist.githubusercontent.com/rodcisal/ef7839215d8d17ff9cf07b19e5e7593d/raw/718370f384f8dbcff1548933df45ea3394a223d3/especialidadesMedicas.json');
      setEspecialidades(respuesta.data)
    }
    getEspecialidades()
  },[]);

  const deleteDoctor = (doctorDelete) => { 
    DoctorsCollection.remove(doctorDelete._id)
    setMensaje('Doctor Eliminado Con Exito')
  }
  

  const CreateDoctor = (doctorAdd) => {DoctorsCollection.insert({
    nombres: doctorAdd.nombres,
    apellidoPaterno: doctorAdd.apellidoPaterno,
    apellidoMaterno: doctorAdd.apellidoMaterno,
    rut: doctorAdd.rut,   
    especialidad: doctorAdd.especialidad,
    createdAt: new Date()
  }
  );
  setMensaje('Doctor Creado Correctamente')
  setClaseMensaje('exito')
}

const getDoctorUpdate = (doctorUp) => {
  setDoctor(doctorUp)
  setMensaje('')
  setShowBtnUpdate(true)
}

const updateDoctor = (doctor) => {

  DoctorsCollection.update(doctor._id, {
    $set: {
      nombres: doctor.nombres,
      apellidoPaterno: doctor.apellidoPaterno,
      apellidoMaterno: doctor.apellidoMaterno,
      rut: doctor.rut,
      especialidad: doctor.especialidad,
    }
  })
  
  setMensaje('Doctor Actualizado Con Exito')
  setClaseMensaje("exito")
  restablecer()
  setShowBtnUpdate(false)
}

const restablecer = () => {
  setDoctor({
    nombres:'',
    apellidoPaterno:'',
    apellidoMaterno:'',
    rut:'',
    especialidad:''
  })
}

  return(
    <Container fluid>
      <Row>
        <Header 
          mensaje={mensaje}
          claseMensaje={claseMensaje}
        />
      </Row>
      <hr></hr>
      <Row>
        <DoctorForm 
          especialidades = {especialidades}
          doctor={doctor}
          showBtnUpdate={showBtnUpdate}
          setMensaje={setMensaje}
          CreateDoctor={CreateDoctor}
          updateDoctor={updateDoctor}
          setDoctor={setDoctor}
          setClaseMensaje={setClaseMensaje}
          restablecer={restablecer}
        />
        <DoctorList
          deleteDoctor={deleteDoctor}
          getDoctorUpdate={getDoctorUpdate}
        />
      </Row>
    </Container>
  )
};

export default App;
