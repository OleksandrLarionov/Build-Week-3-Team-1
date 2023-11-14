import { Card, Col, Row } from 'react-bootstrap'
import { FcPackage } from 'react-icons/fc'
import { BsBookmarkFill } from 'react-icons/bs'

const ShowProfile = () => {
  return (
    <Row>
      <Col className="px-0 mb-1 border rounded-3 m-2 w-100">
        <Card
          className="position-relative border-0"
          style={{ border: '1px solid rgb(223,222,219)' }}
        >
          <Card.Img
            variant="top"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3ItjUjmdyS3oifHWUhSGsSpNphIZ38hZ3Obdz2FjU&s"
            style={{ height: '60px' }}
          />
          <Card.Body className="mt-5 text-center pb-0">
            <div>
              <img
                src="https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp"
                alt="profile"
                style={{
                  height: '75px',
                  width: '75px',
                  borderRadius: '75px',
                  border: '3px solid white',
                  position: 'absolute',
                  left: '115px',
                  top: '30px',
                }}
              />
            </div>
            <Row>
              <Col className="lh-sm">
                <Card.Title
                  className="fw-bold mb-0"
                  style={{ fontSize: '1.4rem' }}
                >
                  name
                </Card.Title>
                <Card.Text className="mb-3" style={{ fontSize: '0.9rem' }}>
                  profession
                </Card.Text>
              </Col>
              <hr className="m-0" />
              <Col className="lh-sm bottom-part pt-3">
                <div className="d-flex justify-content-between">
                  <p className="text-secondary mb-0">Collegamento</p>
                  <p className="text-primary mb-0">1</p>
                </div>
                <p className="text-start">Espandi la tua rete</p>
              </Col>
              <hr className="m-0" />
              <Col className="bottom-part pt-3">
                <p className="text-secondary mb-0 text-start lh-1">
                  Accedi a strumenti e informazioni in esclusiva
                </p>
                <div className="d-flex">
                  <FcPackage className="mt-1" />
                  <p className=" ms-1 text-decoration-underline fw-bold">
                    Prova Premium per 0 EUR
                  </p>
                </div>
              </Col>
              <hr className="m-0" />
              <Col className="bottom-part pt-3 d-flex align-items-center justify-content-start">
                <BsBookmarkFill className="text-secondary me-2 mb-3" />
                <p>I miei elementi</p>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}

export default ShowProfile
