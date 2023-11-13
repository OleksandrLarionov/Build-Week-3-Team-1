import { Row, Col, Button } from "react-bootstrap";
import { AiFillEye } from "react-icons/ai";
import Card from "react-bootstrap/Card";

const Suggested = () => {
  return (
    <Row className="elements pb-3">
      <p className="fw-bold fs-5 pt-3 mb-0">Consigliato per te</p>
      <p
        className="text-secondary d-flex align-items-center"
        style={{ fontSize: "0.9rem" }}
      >
        {" "}
        <AiFillEye className="fs-6" /> Solo per te
      </p>
      <p className="fw-bold mb-0">Intermedio</p>
      <div className="d-flex align-items-center">
        <progress value={0.7} style={{ width: "90%" }} />
        <span className="ps-2">5/7</span>
      </div>
      <p style={{ fontSize: "0.8rem" }}>
        Completa 2 passaggi per raggiungere il livello{" "}
        <span className="fw-bold text-primary">Massimo</span>
      </p>
      <Row >
        <Col className="col-6">
          <Card style={{backgroundColor :'rgb(248,250,253', height:'100%', boxSizing: 'border-box'}}>
            <Card.Body className="d-flex flex-column">
              <Card.Title className="fw-bold" style={{fontSize:'1.2rem'}}>Dove lavori attualmente?</Card.Title>
              <Card.Text className="flex-grow-1 lh-2" style={{fontSize:'0.8rem'}}>
              Gli utenti che includono almeno una posizione lavorativa ricevono fino a 3,5 volte più visualizzazioni del profilo.
              </Card.Text>
              <Button
                variant="outline-secondary"
                className="rounded-pill fw-bold mt-3 "
                style={{ width: "180px" }}
              >
                Aggiungi posizione
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col-6">
          <Card style={{backgroundColor :'rgb(248,250,253', height:'100%', boxSizing: 'border-box'}}>
            <Card.Body className="d-flex flex-column">
              <Card.Title className="fw-bold" style={{fontSize:'1.2rem'}}>Scrivi un riepilogo per mettere in evidenza la tua personalità o la tua esperienza lavorativa</Card.Title>
              <Card.Text className="flex-grow-1 lh-2" style={{fontSize:'0.8rem'}}>
              Gli utenti che includono almeno una posizione lavorativa ricevono fino a 3,5 volte più visualizzazioni del profilo.
              </Card.Text>
              <Button
                variant="outline-secondary"
                className="rounded-pill fw-bold mt-3 "
                style={{ width: "200px" }}
              >
                Aggiungi un riepilogo
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Row>
  );
};

export default Suggested;
