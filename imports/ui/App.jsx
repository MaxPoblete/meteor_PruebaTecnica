import React,{useEffect, useState} from 'react';
import { Container, Row } from 'react-bootstrap';
import  DoctorsCollection  from '../api/DoctorsCollection';
import  DoctorForm  from '../ui/components/doctor/DoctorForm';
import DoctorList from '../ui/components/doctor/DoctorList';
import Header from '../ui/components/layout/Header'

const App = () => {

  const [doctor, setDoctor] = useState({
    nombres:'',
    apellidoPaterno:'',
    apellidoMaterno:'',
    rut:'',
    especialidad:''
  });

  const[mensaje, setMensaje] = useState('');
  const[claseMensaje, setClaseMensaje] = useState('');
  const[showBtnUpdate, setShowBtnUpdate] = useState(false)

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
