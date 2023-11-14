import { Row, Col, Button } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";
import { ImPencil } from "react-icons/im";

const Activities = () => {
  return (
    <Row className="elements mb-1 ">
      <Row>
        <Col className="col-8">
          <p className="fw-bold fs-5 pt-3 mb-0">Attività</p>
          <p className="text-primary fw-bold" style={{ fontSize: "0.8rem" }}>
            45 follower
          </p>
          <p className="mb-0 text-secondary" style={{ fontSize: "0.8rem" }}>
            <span className="fw-bold">NAME</span> ha pubblicato questo post{" "}
            <span className="fs-5">·</span> 2m{" "}
          </p>
          <p className="pt-2">Stay positive 😎</p>
          <Row >
            <Col className="col-5">
              <img
                src="https://img.freepik.com/free-photo/view-funny-monkey-human-clothing_23-2150758506.jpg"
                alt="post"
                height={100}
                width={150}
                className="mb-2 rounded"
              />
            </Col>
            <Col className="col-7">
              <p className="fw-bold mb-0" style={{ fontSize: "0.9rem" }}>
                Ti senti stanco/a?
              </p>
              <p
                className="mb-0 text-secondary lh-1"
                style={{ fontSize: "0.7rem" }}
              >
                Ecco alcuni consigli utili...<span className="fs-5">·</span>2
                min di lettura
              </p>
            </Col>
          </Row>
        </Col>
        <Col className="col-4 mt-3 text-end">
        <Button
                  variant="outline-primary"
                  className="rounded-pill fw-bold lh-1 me-2"
                  style={{ width: "130px", fontSize:'0.9rem' }}
                >Crea un post
          </Button> <ImPencil className="text-secondary"/>
        </Col>
      </Row>
      <Row className=" mx-0 w-100 d-flex text-center border-top py-2">
        <p className="mb-0 fw-bold text-secondary" style={{fontSize:'0.9rem'}}>
          Mostra tutti i post <BsArrowRight />{" "}
        </p>
      </Row>
    </Row>
  );
};

export default Activities;
