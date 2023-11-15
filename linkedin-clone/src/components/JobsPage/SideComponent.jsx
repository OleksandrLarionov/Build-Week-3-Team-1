import { Col, Row } from 'react-bootstrap'
import {
  BsBookmarkFill,
  BsClipboard2Plus,
  BsGearFill,
  BsListUl,
  BsYoutube,
} from 'react-icons/bs'

const SideComponent = () => {
  return (
    <>
      <Row className="border rounded-3 mt-2 p-3 elements">
        <Col>
          <div className="d-flex justify-content-start fw-bold py-2">
            <BsBookmarkFill className="mt-1 me-2" />
            <p>Le mie offerte di lavoro</p>
          </div>

          <div className="d-flex justify-content-start fw-bold py-2">
            <BsListUl className="mt-1 me-2" />
            <p>Preferenze</p>
          </div>
          <div className="d-flex justify-content-start fw-bold py-2">
            <BsClipboard2Plus className="mt-1 me-2" />
            <p>Valutazioni delle competenze</p>
          </div>
          <div className="d-flex justify-content-start fw-bold py-2">
            <BsYoutube className="mt-1 me-2" />
            <p>Indicazioni per chi cerca lavoro</p>
          </div>
          <div className="d-flex justify-content-start fw-bold py-2">
            <BsGearFill className="mt-1 me-2" />
            <p>Impostazioni candidatura</p>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default SideComponent
