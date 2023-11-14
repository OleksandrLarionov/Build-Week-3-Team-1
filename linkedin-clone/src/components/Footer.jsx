import { Col, Container, Form, Row } from 'react-bootstrap'
import {
  BsFillCaretDownFill,
  BsFillQuestionCircleFill,
  BsGearFill,
  BsShieldShaded,
} from 'react-icons/bs'

const Footer = () => {
  return (
    <>
      <Container className="pt-4 footer-text text-secondary text-decoration-none">
        <Row className="flex-nowrap">
          <Col>
            <Row>
              <Col sm={3}>
                <p>Informazioni</p>
                <p>Linee guida della community</p>
                <p>
                  Privacy e condizioni
                  <BsFillCaretDownFill className="ms-2" />
                </p>
                <p>Sales Solutions</p>
                <p>Centro sicurezza</p>
              </Col>
              <Col sm={3}>
                <p>Accessibilità</p>
                <p>Carriera</p>
                <p>Opzioni per gli annunci pubblicitari</p>
                <p>Mobile</p>
              </Col>
              <Col sm={3}>
                <p>Talent Solutions</p>
                <p>Soluzioni di marketing</p>
                <p>Pubblicità</p>
                <p>Piccole imprese</p>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row className="flex-column flex-md-row">
              <Col>
                <div className="d-flex">
                  <div>
                    <BsFillQuestionCircleFill className="fs-5 me-2 mt-1" />
                  </div>
                  <div>
                    <p className="fs-6 mb-0">Domande?</p>
                    <p>Visita il nostro Centro assistenza.</p>
                  </div>
                </div>
                <div className="d-flex">
                  <div>
                    <BsGearFill className="fs-5 me-2 mt-1" />
                  </div>
                  <div>
                    <p className="fs-6 mb-0">
                      Gestisci il tuo account e la tua privacy
                    </p>
                    <p>Vai alle impostazioni</p>
                  </div>
                </div>
                <div className="d-flex">
                  <div>
                    <BsShieldShaded className="fs-5 me-2 mt-1" />
                  </div>
                  <div>
                    <p className="fs-6 mb-0">
                      Trasparenza sui contenuti consigliati
                    </p>
                    <p>Scopri di più sui contenuti consigliati.</p>
                  </div>
                </div>
              </Col>
              <Col>
                <div>
                  <Form.Label className="mb-1">Seleziona lingua</Form.Label>
                  <Form.Select
                    aria-label="Seleziona lingua"
                    className="w-75 border-secondary"
                  >
                    <option>Italiano</option>
                    <option>English</option>
                    <option>French</option>
                    <option>Spanish</option>
                  </Form.Select>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col className="mt-2">
            <p>LinkedIn Corporation © {new Date().getFullYear()}</p>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Footer
