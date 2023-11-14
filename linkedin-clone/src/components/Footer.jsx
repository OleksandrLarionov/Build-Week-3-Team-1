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
        <Row className="mx-0 mt-5 text-secondary" style={{fontSize:'0.8rem'}}>
          <Col className='col-7 lh-1' >
            <Row className='justify-content-around fw-bold '>
              <Col sm={3}>
                <p>Informazioni</p>
                <p>Linee guida della community</p>
                <p>
                  Privacy e condizioni <BsFillCaretDownFill style={{fontSize:'0.5rem'}}/>
                  
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
          <Col className='col-5 '>
            <Row className="flex-column flex-md-row">
              <Col>
                <div className="d-flex">
                  <div>
                    <BsFillQuestionCircleFill className="fs-5 me-2" />
                  </div>
                  <div>
                    <p className="fs-6 mb-0 fw-bold">Domande?</p>
                    <p className='lh-1'>Visita il nostro Centro assistenza.</p>
                  </div>
                </div>
                <div className="d-flex">
                  <div>
                    <BsGearFill className="fs-5 me-2" />
                  </div>
                  <div>
                    <p className="fs-6 mb-0 fw-bold">
                      Gestisci il tuo account e la tua privacy
                    </p>
                    <p className='lh-1'>Vai alle impostazioni</p>
                  </div>
                </div>
                <div className="d-flex">
                  <div>
                    <BsShieldShaded className="fs-5 me-2" />
                  </div>
                  <div>
                    <p className="fs-6 mb-0 fw-bold">
                      Trasparenza sui contenuti consigliati
                    </p>
                    <p className='lh-1'>Scopri di più sui contenuti consigliati.</p>
                  </div>
                </div>
              </Col>
              <Col>
                <div>
                  <Form.Label className="mb-1 fw-bold">Seleziona lingua</Form.Label>
                  <Form.Select
                    style={{fontSize:'0.8rem'}}
                    aria-label="Seleziona lingua"
                    className="w-100 border-secondary fw-bold text-secondary"
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
          <br/>
          <Col className="mt-2 ps-5">
            <p>LinkedIn Corporation © {new Date().getFullYear()}</p>
          </Col>
        </Row>
    </>
  )
}

export default Footer
