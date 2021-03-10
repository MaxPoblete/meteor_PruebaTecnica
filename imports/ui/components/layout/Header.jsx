import React from 'react';
import { Row, Col} from 'react-bootstrap';

const Header = ({ mensaje, claseMensaje }) => {

  return(
    <Row>
      <Col lg={6} xs={6}>
        <h4>Mantenedor Doctores</h4>
      </Col>
      <Col lg={6} xs={6}>
        {mensaje !== ''?
        <h5 className={claseMensaje}><strong>{ mensaje }</strong></h5>
        :
        null
        }
      </Col>
    </Row>
  )
};

export default Header;


