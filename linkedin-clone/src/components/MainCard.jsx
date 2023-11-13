import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { ImPencil } from "react-icons/im";

const MainCard = () => {
  return (
    <Row>
      <Col className="px-0 elements">
        <Card>
          <Card.Img
            variant="top"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3ItjUjmdyS3oifHWUhSGsSpNphIZ38hZ3Obdz2FjU&s"
            style={{ height: "200px" }}
          />
          <Card.Body>
            <div className="text-end">
              <ImPencil />
            </div>
            <Row>
              <Col className="col-9">
                <Card.Title
                  className="fw-bold mb-0"
                  style={{ fontSize: "1.2rem" }}
                >
                  NAME
                </Card.Title>
                <Card.Text className="mb-0" style={{ fontSize: "1rem" }}>
                  PROFESSION
                </Card.Text>
                <Card.Text className="mb-0" style={{ fontSize: "0.9rem" }}>
                  Where u live ·<span>Informazioni di contatto</span>
                </Card.Text>
                <Card.Text>45 collegamenti</Card.Text>{" "}
              </Col>
              <Col className="col-3">
                <div></div>
                <p>SCHOOL</p>
              </Col>
              <div>
                <Button
                  variant="primary"
                  className="rounded-pill fw-bold me-2"
                  style={{ width: "150px" }}
                >
                  Disponibile per
                </Button>
                <Button
                  variant="outline-primary"
                  className="rounded-pill fw-bold  me-2"
                  style={{ width: "250px" }}
                >
                  Aggiungi sezione del profilo
                </Button>
                <Button
                  variant="outline-secondary"
                  className="rounded-pill fw-bold"
                  style={{ width: "70px" }}
                >
                  Altro
                </Button>
              </div>
              <Card.Text className="d-flex" style={{ fontSize: "1rem" }}>
                <div className="d-flex flex-column">
                  <span className="mb-0">Disponibile a lavorare</span>
                  <span>Ruolo di Front-End Developer</span>
                  <span>Mostra dettagli</span>
                </div>
                <div>
                  <ImPencil />
                </div>
              </Card.Text>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default MainCard;
