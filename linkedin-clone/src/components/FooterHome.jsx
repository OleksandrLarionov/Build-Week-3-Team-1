import { Col, Container, Row } from 'react-bootstrap'
import { BsFillCaretDownFill } from 'react-icons/bs'

const FooterHome = () => {
  return (
    <>
      <Container className="pt-4 footer-text text-secondary text-decoration-none">
        <Row className="flex-nowrap flex-column lh-sm">
          <Col className="d-flex flex-wrap justify-content-around">
            <p>Informazioni</p>
            <p>Accessibilità</p>
            <p>Centro assistenza</p>
            <p>
              Privacy e condizioni
              <BsFillCaretDownFill className="ms-2" />
            </p>
            <p>Opzioni per gli annunci pubblicitari</p>
            <p>Pubblicità</p>
            <p>
              Servizi alle aziende
              <BsFillCaretDownFill className="ms-2" />
            </p>
            <p>Scarica l'app LinkedIn</p>

            <p>Altro</p>
          </Col>
          <Col className="mt-2 text-center text-black">
            <p>LinkedIn Corporation © {new Date().getFullYear()}</p>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default FooterHome
