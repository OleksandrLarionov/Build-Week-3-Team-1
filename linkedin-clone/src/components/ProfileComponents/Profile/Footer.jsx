import { Col, Form, Row } from 'react-bootstrap'
import {
  BsFillCaretDownFill,
  BsFillQuestionCircleFill,
  BsGearFill,
  BsShieldShaded,
} from 'react-icons/bs'

const Footer = () => {
  return (
    <>
        <Row  className="mx-0 mt-5 text-secondary justify-content-center" style={{fontSize:'0.8rem'}}>
          <Col  className=' lh-1 me-5' xs={11} sm={5} lg={5} xxl={3} >
            <Row className='justify-content-around fw-bold '>
              <Col sm={4} className='here'>
                <a href='#'>Informazioni</a>
                <a href='#'>Linee guida della community</a>
                <a href='#'>
                  Privacy e condizioni <BsFillCaretDownFill style={{fontSize:'0.5rem'}}/>
                  
                </a>
                <a href='#'>Sales Solutions</a>
                <a href='#'>Centro sicurezza</a>
              </Col>
              <Col sm={4} className='here'>
                <a href='#'>Accessibilità</a>
                <a href='#'>Carriera</a>
                <a href='#'>Opzioni per gli annunci pubblicitari</a>
                <a href='#'>Mobile</a>
              </Col>
              <Col sm={4} className='here'>
                <a href='#'>Talent Solutions</a>
                <a href='#'>Soluzioni di marketing</a>
                <a href='#'>Pubblicità</a>
                <a href='#'>Piccole imprese</a>
              </Col>
            </Row>
          </Col>
          <Col xs={12} sm={5} md={4} >
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
          
        </Row>
        <Row className='mx-0 mb-3 me-5 justify-content-center'>
          <Col xs={11} sm={10}  lg={9} xxl={7} className="mt-2 ">
            <p style={{fontSize:'0.8rem'}}>LinkedIn Corporation © {new Date().getFullYear()}</p>
          </Col>
        </Row>
        </> )
}

export default Footer
