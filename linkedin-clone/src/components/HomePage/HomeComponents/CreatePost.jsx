import { Col, Form, Row } from 'react-bootstrap'
import { FcCalendar, FcPicture, FcTemplate } from 'react-icons/fc'

const CreatePost = () => {
  return (
    <Row className="w-100 px-0 mb-1 border rounded-3 mt-0 mx-0 flex-column py-3 elements">
      <Col className="d-flex align-items-center">
        <img
          src="https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp"
          alt="profile"
          style={{
            height: '50px',
            width: '50px',
            borderRadius: '75px',
            border: '3px solid white',
          }}
        />
        <Form.Control
          type="text"
          placeholder="Avvia un post"
          className="rounded-pill w-100 ms-2"
        />
      </Col>
      <Col className="d-flex  w-100 justify-content-center pt-3">
        <Row className="w-100 text-secondary">
          <Col className="d-flex justify-content-between">
            <div className="d-flex align-items-center">
              <FcPicture className="mb-3 me-2 fs-4" />
              <p>Contenuti multimediali</p>
            </div>
            <div className="d-flex align-items-center">
              <FcCalendar className="mb-3 me-2 fs-4" />
              <p>Evento</p>
            </div>
            <div className="d-flex align-items-center">
              <FcTemplate className="mb-3 me-2 fs-4" />
              <p>Scrivi un articolo</p>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default CreatePost
