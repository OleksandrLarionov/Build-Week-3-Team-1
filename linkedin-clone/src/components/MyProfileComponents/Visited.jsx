import { Row, Col } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";

const Visited = () => {
  return (
    <Row className="elements mb-1">
      <Col className="d-flex justify-content-between p-3" style={{fontSize :'0.9rem'}}>
        <div className="d-flex align-items-end">
          <div className="fw-bold pe-2"> 9 visualizzazioni del profilo</div>
          <div className="text-secondary" style={{fontSize :'0.8rem'}}>Ultimi 90 giorni</div>
        </div>
        <div className="fw-bold text-secondary ">
          Visualizza tutte le analisi <BsArrowRight className="fs-6 fw-bold ms-2" />{" "}
        </div>
      </Col>
    </Row>
  );
};

export default Visited;
