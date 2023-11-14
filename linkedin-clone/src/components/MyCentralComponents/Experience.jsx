import { Row, Col } from "react-bootstrap";
import { ImPencil } from "react-icons/im";
import {BsPlus} from 'react-icons/bs'
import {FcCalendar} from 'react-icons/fc'

const Experience = () => {
    return (  
        <Row className="elements mb-1 pb-3">
            <Col className="col-12 d-flex
            align-items-center  justify-content-between pb-3">
            <span className="fw-bold fs-5 pt-3 mb-0">Esperienza</span>
            <div className="text-secondary me-3">
            <BsPlus className="fs-3 mx-3"/>
            <ImPencil/>
            </div>
            </Col>
            <Col className="col-2 display-4">
            <FcCalendar />
            </Col>
            <Col className="col-7">
            <p className="fw-bold mb-0" style={{ fontSize: "0.9rem" }}>
                Sviluppo professionale
              </p>
            <p className="mb-0 " style={{ fontSize: "0.8rem" }}>
                Pausa lavorativa
              </p>
            <p className="mb-0 text-secondary" style={{ fontSize: "0.8rem" }}>
                mag 2023 - mar 2024  ·  10 mesi<br/>
                Milano, Lombardia <br/>
              </p>
            </Col>
        </Row>
    );
}
 
export default Experience;