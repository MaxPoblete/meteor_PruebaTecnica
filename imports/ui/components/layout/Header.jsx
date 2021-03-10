import React from 'react';
import { Row, Col} from 'react-bootstrap';

const Header = ({ mensaje, claseMensaje }) => {

  return(
    <Row className="header">
      <Col lg={6} xs={12}>
        <h3><strong>Mantenedor Doctores</strong></h3>
      </Col>
      <Col lg={6} xs={12}>
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


