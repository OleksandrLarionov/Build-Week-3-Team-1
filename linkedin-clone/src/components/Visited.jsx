import { Row, Col } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";

const Visited = () => {
  return (
    <Row className="elements mb-2">
      <Col className="d-flex justify-content-between p-3">
        <div className="d-flex">
          <div className="mx-2 fw-bold"> 9 isualizzazioni del profilo</div>
          <div className="text-secondary ">Ultimi 90 gg</div>
        </div>
        <div className="fw-bold text-secondary ">
          Visualizza tutte le analisi <BsArrowRight className="" />{" "}
        </div>
      </Col>
    </Row>
  );
};

export default Visited;
