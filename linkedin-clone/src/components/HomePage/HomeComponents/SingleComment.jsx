import React from 'react';
import { Row, Col } from 'react-bootstrap';
import scimmia from '../../../../src/scimmia.jpg'

const SingleComment = () => {

  return (
    <Row style={{ marginBottom: '10px' }}>
      <Col md={2}>
        <img className='ms-3' src={scimmia} alt="User" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
      </Col>
      <Col md={10}>
        <div>
          <strong>USERNAME</strong>
        </div>
        <div>JOB</div>
        <div>COMMENT</div>
      </Col>
    </Row>
  );
};

export default SingleComment;
