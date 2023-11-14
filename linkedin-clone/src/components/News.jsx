import { Col, Row } from 'react-bootstrap'
import { BsChevronCompactDown, BsDot, BsInfoSquareFill } from 'react-icons/bs'

const News = () => {
  return (
    <Row className="px-0 mb-1 border rounded-3 m-2 w-100 flex-column elements">
      <Col className="d-flex justify-content-between align-items-center mt-2">
        <h5>LinkedIn Notizie</h5>
        <BsInfoSquareFill />
      </Col>
      <Col>
        <Row className="flex-column">
          <Col className="d-flex text-size justify-content-start bottom-part mb-2">
            <div>
              <BsDot className="fs-4" />
            </div>
            <div>
              <p className="mb-0 fw-bold">Esselunga ora compete con Tannico</p>
              <p className="mb-0 text-secondary">4 ore fa</p>
            </div>
          </Col>
          <Col className="d-flex text-size justify-content-start bottom-part mb-2">
            <div>
              <BsDot className="fs-4" />
            </div>
            <div>
              <p className="mb-0 fw-bold">Single e fieri di esserlo</p>
              <p className="mb-0 text-secondary">4 giorni fa • 367 lettori</p>
            </div>
          </Col>
          <Col className="d-flex text-size justify-content-start bottom-part mb-2">
            <div>
              <BsDot className="fs-4" />
            </div>
            <div>
              <p className="mb-0 fw-bold">I primi supermercati senza casse</p>
              <p className="mb-0 text-secondary">3 giorni fa</p>
            </div>
          </Col>
          <Col className="d-flex text-size justify-content-start bottom-part mb-2">
            <div>
              <BsDot className="fs-4" />
            </div>
            <div>
              <p className="mb-0 fw-bold">
                Un mercato del lavoro che invecchia
              </p>
              <p className="mb-0 text-secondary">19 ore fa • 104 lettori</p>
            </div>
          </Col>
          <Col className="d-flex text-size justify-content-start bottom-part mb-2">
            <div>
              <BsDot className="fs-4" />
            </div>
            <div>
              <p className="mb-0 fw-bold">Che cosa vuole l'Italia dall'AI</p>
              <p className="mb-0 text-secondary">3 giorni fa • 350 lettori</p>
            </div>
          </Col>
        </Row>
      </Col>
      <Col className="mt-2 ms-4">
        <p className="text-secondary bottom-part w-50 fw-bold">
          Show more <BsChevronCompactDown />
        </p>
      </Col>
    </Row>
  )
}

export default News
