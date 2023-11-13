import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { ImPencil } from "react-icons/im";

const MainCard = () => {
  return (
    <Row>
      <Col className="px-0 elements">
        <Card className="position-relative">
          <Card.Img
            variant="top"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3ItjUjmdyS3oifHWUhSGsSpNphIZ38hZ3Obdz2FjU&s"
            style={{ height: "200px" }}
          />
          <Card.Body className="mt-5">
            <div className="text-end">
              <ImPencil className="fs-5" style={{position:'absolute', right:'20px', top:'220px'}}/>
           <img src="https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp" alt="profile" style={{height:'150px',width:'150px', borderRadius:'75px', border: '3px solid white', position:'absolute', left:'20px', top:'100px'}}/>
            </div>
            <Row>
              <Col className="col-9">
                <Card.Title
                  className="fw-bold mb-0"
                  style={{ fontSize: "1.4rem" }}
                >
                  NAME
                </Card.Title>
                <Card.Text className="mb-0" style={{ fontSize: "0.9rem" }}>
                  PROFESSION
                </Card.Text>
                <Card.Text className="mb-0" style={{ fontSize: "0.8rem" }}>
                  Where u live ·<span className="text-primary fw-bold">Informazioni di contatto</span>
                </Card.Text>
                <Card.Text className="text-primary fw-bold" style={{ fontSize: "0.8rem" }}>45 collegamenti</Card.Text>{" "}
              </Col>
              <Col className="col-3">
                <div></div>
                <p>SCHOOL</p>
              </Col>
              <div className="mt-3"> 
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
              <Card.Text className="d-flex justify-content-between w-50 mt-3 ms-2 rounded py-2 " style={{ fontSize: "0.9rem",backgroundColor: 'rgb(223,231,240' }}>
                <div className="d-flex flex-column" style={{ fontSize:"0.8rem" }}>
                  <span className="mb-0 fw-bold pb-0" >Disponibile a lavorare</span>
                  <span>Ruolo di Front-End Developer</span>
                  <span className="fw-bold text-primary">Mostra dettagli</span>
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
