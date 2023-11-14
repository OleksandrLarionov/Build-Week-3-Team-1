import { Row, Col } from "react-bootstrap";
import { ImPencil } from "react-icons/im";
import {BsPlus} from 'react-icons/bs';
import { PiStudent } from "react-icons/pi";

const Education = () => {
    return ( 
        <Row className="elements mb-1 pb-3">
        <Col className="col-12 d-flex
        align-items-center  justify-content-between pb-3">
        <span className="fw-bold fs-5 pt-3 mb-0">Formazione</span>
        <div className="text-secondary me-3">
        <BsPlus className="fs-3 mx-3"/>
        <ImPencil/>
        </div>
        </Col>
        <Col className="col-2 display-5">
          <PiStudent/>
        </Col>
        <Col className="col-7">
        <p className="fw-bold mb-0" style={{ fontSize: "0.9rem" }}>
            SCHOOL
          </p>
        <p className="mb-0" style={{ fontSize: "0.8rem" }}>
            Indirizzo di studi
          </p>
        <p className="mb-0 text-secondary" style={{ fontSize: "0.8rem" }}>
           sett 2012 - mar 2017
          </p>
        </Col>
    </Row>
     );
}
 
export default Education;