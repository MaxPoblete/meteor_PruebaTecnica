import React from 'react';
import { Button, Col, Form,Row } from 'react-bootstrap';
import Titulo from '../layout/Titulo'

const { validate, clean, format, getCheckDigit } = require('rut.js')

const DoctorForm = ({ 
  especialidades,
  setMensaje,
  CreateDoctor,
  doctor, 
  setDoctor, 
  updateDoctor,
  showBtnUpdate,
  setClaseMensaje,
  restablecer
 }) => {

  
  const actualizarState = (e) => {
    setDoctor({
        ...doctor,
        [e.target.name]: e.target.value
    })
  }

  const{nombres, apellidoMaterno, apellidoPaterno, rut, especialidad } = doctor

  const handleSubmit = e => {
    e.preventDefault();

    if (nombres.trim() === ''){
      setMensaje('Ingrese nombre valido');
      setClaseMensaje("error")
       return;
    }

    if (apellidoPaterno.trim() === ''){
      setMensaje('Ingrese apellido Paterno');
      setClaseMensaje("error")
      return;
    }

    if (apellidoMaterno.trim() === ''){
      setMensaje('Ingrese apellido Materno');
      setClaseMensaje("error")
     return;
    }

    if (rut.trim() === ''){
      setMensaje('Ingrese rut');
      setClaseMensaje("error")
     return;
    }

    if (validate(rut) === false){
      setMensaje('El Rut ingresado no es valido');
      setClaseMensaje("error")
      return;
    }

    if (especialidad === ''){
      setMensaje('Seleccione espacialidad Medico');
      setClaseMensaje("error")
      return;
    }

    const rutClear = clean(rut);
    doctor.rut = format(rutClear);


    CreateDoctor(doctor)

    restablecer()
  };
 
  return (
    <Col lg={3} xs={12} className="m-4 cont-form">
      {showBtnUpdate?
       <Titulo titulo='Editar Doctor'/>
    :
    <Titulo titulo='Agregar Doctor'/>
    }
       
         <Form className="" onSubmit={handleSubmit} >
                <Row>
                  <Col lg={6} xs={12}>
                    <Form.Control
                        maxLength={32}
                        size="sm"
                        type="text"
                        placeholder="nombres"
                        value={nombres}
                        name='nombres'
                        onChange={actualizarState}
                    />
                  </Col>
                  <Col lg={6} xs={12}>
                    <Form.Control
                      maxLength={32}
                      size="sm"
                      type="text"
                      placeholder="Apellido Paterno"
                      name='apellidoPaterno'
                      value={apellidoPaterno}
                      onChange={actualizarState}
                    />
                  </Col>
                </Row>
                <br></br>
               <Row>
                 <Col lg={6}>
                    <Form.Control
                      maxLength={32}
                      size="sm"
                      type="text"
                      placeholder="Apellido Materno"
                      name='apellidoMaterno'
                      value={apellidoMaterno}
                      onChange={actualizarState}
                    />
                 </Col>
                 <Col lg={6}>
                    <Form.Control
                      maxLength={12}
                      size="sm"
                      type="text"
                      placeholder="Rut"
                      name='rut'
                      value={rut}
                      onChange={actualizarState}
                    />
                 </Col>
                </Row>
                <br></br>
                <Row>
                  <Col lg={8} xs={12}>
                    <Form.Control 
                          className=""
                          name='especialidad'
                          value={especialidad}
                          onChange={actualizarState}
                          size="sm"
                          as="select">

                      <option value="">Seleccione Especialidad</option>
                        {especialidades.map(item =>(
                            <option key={item._id} value={item.nombre}>{item.nombre}</option>
                        ))}
                    </Form.Control>
                  </Col>
                  <Col lg={4} xs={12}>
                    {showBtnUpdate?
                      <Button 
                          variant="primary"  
                          size="sm" 
                          block
                          onClick={()=>updateDoctor(doctor)}>
                        Editar
                      </Button>
                    :
                      <Button 
                        variant="success" 
                        onClick={(e)=>handleSubmit(e)}  
                        size="sm" 
                        block>
                        Agregar
                      </Button>
                    }
                  </Col>
              </Row>
          </Form>
      </Col>
  );
};

export  default DoctorForm;