import React,{ useState, useEffect } from 'react';
import { Col,Table } from 'react-bootstrap';
import Titulo from '../layout/Titulo'
import { useTracker } from 'meteor/react-meteor-data';
import  DoctorsCollection  from '../../../api/DoctorsCollection';


const DoctorList = ({ deleteDoctor, getDoctorUpdate }) => {

    const doctores =  useTracker(() =>DoctorsCollection.find({}).fetch());


   

  return(
        <Col lg={8} xs={12} className="m-4">
            {doctores.length !== 0?  
            <>
            <Titulo titulo='Lista Doctores'/>
            <Table
            striped bordered hover>
            <thead className="head-Table">
                <tr>
                    <th>Nombres</th>
                    <th>A. Paterno</th>
                    <th>A. Materno</th>
                    <th>Rut</th>
                    <th>Especialidad</th>
                    <th colSpan={2} className="text-center">Acciones</th>
                </tr>
            </thead>
            <tbody>
                {doctores.map(d =>(
                    <tr key={d._id}>
                        <td>{d.nombres}</td>
                        <td>{d.apellidoPaterno}</td>
                        <td>{d.apellidoMaterno}</td>
                        <td>{d.rut}</td>
                        <td>{d.especialidad}</td>
                        <td>
                            <button 
                                size="sm"
                                onClick={ () => deleteDoctor(d) }
                                className="btn btn-danger">
                                Eliminar
                            </button> 
                        </td>
                        <td>
                            <button 
                                size="sm"
                                className="btn btn-primary" 
                                onClick={ () => getDoctorUpdate(d) }>
                                Update
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
            </Table>
            </>
             :
             <h6>No Hay Doctores Registrados</h6>
             }
        </Col>
  )
};

export default DoctorList;
