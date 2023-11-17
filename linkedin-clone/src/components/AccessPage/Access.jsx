import { Row,Col,Form,Button} from "react-bootstrap";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getUserAccess } from "../../redux/action/access";
import { Link } from "react-router-dom";


const Access = () => {
    
    const dispatch = useDispatch();
    const [validated, setValidated] = useState(false);
    const [accessKey, setAccessKey] = useState('');
    const [yourID, setYourID] = useState('');

    console.log(accessKey)
    console.log(yourID)

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
        }
    
        setValidated(true);

        dispatch(getUserAccess( accessKey, yourID ));
      };

    return ( 
    <div className="d-flex justify-content-center ">
    <Row className="jusify-content-center elements m-5 p-4" style={{width:'50%'}}>
    <Form noValidate validated={validated} onSubmit={handleSubmit}  >
      <Row className="mb-3">
        <Form.Group className="mb-3" as={Col} xs={11} lg={3} controlId="validationCustom01">
          <Form.Label >AccessKey</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Key..."
            defaultValue="Mark"
            value={accessKey}
            onChange={(e) => setAccessKey(e.target.value)}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} xs={11} lg={3} controlId="validationCustom02">
          <Form.Label className="mb-0">Your ID</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="ID.."
            defaultValue="Otto"
            value={yourID}
            onChange={(e) => setYourID(e.target.value)}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>
     
      <Button type="submit">Submit form</Button>
      </Form>
      <Row className="justify-content-center mt-5">
        <Link to='/Home'>
      <Button className="w-50 btn-success">Go to Profile</Button></Link>
      </Row>
      </Row>
      </div>
     );
}
 
export default Access;