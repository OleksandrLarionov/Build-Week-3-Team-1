import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {ImPencil} from "react-icons/im"

const MainCard = () => {
  return (
    <Row>
      <Col className="px-0 elements">
        <Card>
          <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3ItjUjmdyS3oifHWUhSGsSpNphIZ38hZ3Obdz2FjU&s" style={{ height: '200px'}} />
          <Card.Body>
            <Row>
                <Col className="col-9">
            <Card.Title>NAME</Card.Title>
            <Card.Text>
              PROFESSION
            </Card.Text>
            <Card.Text>
              Where u live
              <p>Informazioni di contatto</p>
            </Card.Text>
            <Card.Text>
             45 collegamenti
            </Card.Text>
            <Button variant="primary">Disponibile per</Button>
            <Button variant="outline-primary">Aggiungi sezione del profilo</Button>
            <Button variant="outline-secondary">Altro</Button>
            <Card.Text>
                <div>
                <p>Disponibile a lavorare</p>
                <p>Ruolo di Front-End Developer</p>
                <p>Mostra dettagli</p>
                </div>
                <div><ImPencil/></div>
            </Card.Text>
            </Col>
            <Col className="col-3">
                <div><ImPencil/></div>
                <p>SCHOOL</p>
            </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default MainCard;
