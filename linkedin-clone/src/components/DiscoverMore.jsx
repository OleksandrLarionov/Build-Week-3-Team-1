import { Col, Row } from 'react-bootstrap'
import { BsPlusLg } from 'react-icons/bs'

const DiscoverMore = () => {
  return (
    <Row className="w-100 mb-1 border rounded-3  flex-column ">
      <Col className="p-3 d-flex justify-content-between align-items-center">
        <div className="text-primary fw-bold  ">
          <p>Gruppi</p>
          <p>Eventi</p>
          <p>Hashtag seguiti</p>
        </div>
        <div>
          <BsPlusLg />
        </div>
      </Col>
      <Col className="border-top py-3 bottom-part text-center text-secondary fw-bold">
        <p className="m-0">Scopri di più</p>
      </Col>
    </Row>
  )
}

export default DiscoverMore
