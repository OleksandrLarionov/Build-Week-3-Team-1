import { ImPencil } from "react-icons/im";
import { BsPlus, BsArrowRight } from "react-icons/bs";
import { Row, Col } from "react-bootstrap";

const Languages = () => {
  return (
    <Row className="elements mb-1">
      <Col
        className="col-12 d-flex
        align-items-center  justify-content-between pb-3"
      >
        <div className="fw-bold fs-5 pt-3 mb-0 me-2">Lingue</div>
        <div className="text-secondary me-3">
          <BsPlus className="fs-3 mx-3" />
          <ImPencil />
        </div>
      </Col>

      <Col className="col-12 pb-3">
        <p className="fw-bold mb-0" style={{ fontSize: "0.9rem" }}>
          Inglese
        </p>
        <p className="mb-0" style={{ fontSize: "0.8rem" }}>
          Conoscenza lavorativa limitata
        </p>
      </Col>
      <Col className="col-12 pb-3">
        <p className="fw-bold mb-0" style={{ fontSize: "0.9rem" }}>
          Italiano
        </p>
        <p className="mb-0" style={{ fontSize: "0.8rem" }}>
          Madrelingua
        </p>
      </Col>
      <Row className=" mx-0 w-100 d-flex text-center border-top py-2">
        <p
          className="mb-0 fw-bold text-secondary"
          style={{ fontSize: "0.9rem" }}
        >
          Mostra tutti i post <BsArrowRight />{" "}
        </p>
      </Row>
    </Row>
  );
};

export default Languages;
