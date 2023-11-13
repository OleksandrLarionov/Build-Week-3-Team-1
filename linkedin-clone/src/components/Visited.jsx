import { Row, Col } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";

const Visited = () => {
  return (
    <Row className="elements mb-2">
      <Col className="d-flex justify-content-between p-3" style={{fontSize :'0.9rem'}}>
        <div className="d-flex align-items-end">
          <div className="fw-bold pe-2"> 9 visualizzazioni del profilo</div>
          <div className="text-secondary">Ultimi 90 gg</div>
        </div>
        <div className="fw-bold text-secondary ">
          Visualizza tutte le analisi <BsArrowRight className="fs-6" />{" "}
        </div>
      </Col>
    </Row>
  );
};

export default Visited;
