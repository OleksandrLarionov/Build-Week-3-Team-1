import { Row,Col,Form,Button} from "react-bootstrap";
import { useState } from 'react';
import linkedIn from '../../../src/linkedIn.png'

/* SVUOTA LO STORE IN CASO DI ERRORI DI DIGITAZIONE */
/* const remove=()=>{
    localStorage.removeItem('personalkey')
    localStorage.removeItem('personalUserID')
}
remove() */

const Access = () => {
    
    const [validated, setValidated] = useState(false);
    const [accessKey, setAccessKey] = useState('');
    const [yourID, setYourID] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
        }
    
        setValidated(true);
        localStorage.setItem('personalkey',accessKey)
        localStorage.setItem('personalUserID',yourID)
        window.location.assign('/Home');
      };

    return ( 
    <div className="d-flex justify-content-center align-items-center" style={{height:'100%'}}>
    <Row className="jusify-content-center elements m-5 p-4" style={{width:'50%'}}>
      <Col xs={12}><img src={linkedIn} alt="logo" className="img-fluid"/></Col>
      <Col xs={12} className="d-flex flex-column">
        
        <p className="text-center fs-5 fw-bold my-3">Inscerisci le tue credenziali per accedere</p>
        
        <Form noValidate validated={validated} onSubmit={handleSubmit} className="mt-3" >
      
      <Row className="mb-3">
      
        <Form.Group className="mb-3" as={Col} xs={12}  controlId="validationCustom01">
          <Form.Label >AccessKey</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Key..."
            defaultValue="Key..."
            value={accessKey}
            onChange={(e) => setAccessKey(e.target.value)}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} xs={12} controlId="validationCustom02">
          <Form.Label className="mb-0">Your ID</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="ID.."
            defaultValue="ID..."
            value={yourID}
            onChange={(e) => setYourID(e.target.value)}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>
   
      <Button type="submit" className="fw-bold">Accedi</Button>
    
      </Form></Col>
      
      </Row>
      </div>
     );
}
 
export default Access;