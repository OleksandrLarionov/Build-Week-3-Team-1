import { Button, Col } from 'react-bootstrap'
import { BsPersonAdd, BsPersonCircle } from 'react-icons/bs'

const People = () => {
  return (
    <>
      <Col className="border rounded-3 p-3 m-2">
        <div>
          <h5>Persone che potresti conoscere</h5>
          <p className="text-secondary">Dalla tua scuola o università</p>

          <div className="d-flex">
            <div>
              <BsPersonCircle className="fs-1 me-2 mt-2" />
            </div>
            <div className="lh-1">
              <p className="fw-bold">Gustavo Oliveira</p>
              <p>Full-Stack Web Developer</p>
              <Button
                variant="light"
                className="text-secondary bg-white border border-black rounded-pill px-3"
              >
                <BsPersonAdd className="me-2" />
                Collegati
              </Button>
            </div>
          </div>
          <hr />
          <div className="d-flex">
            <div>
              <BsPersonCircle className="fs-1 me-2 mt-2" />
            </div>
            <div className="lh-1">
              <p className="fw-bold">Laura Gaudencio Rose</p>
              <p> Junior Full stack Developer | Java | SpringBoot | Angular</p>
              <Button
                variant="light"
                className="text-secondary bg-white border border-black rounded-pill px-3"
              >
                <BsPersonAdd className="me-2" />
                Collegati
              </Button>
            </div>
          </div>
          <hr />
          <div className="d-flex">
            <div>
              <BsPersonCircle className="fs-1 me-2 mt-2" />
            </div>
            <div className="lh-1">
              <p className="fw-bold">Adiener Lopez</p>
              <p> Junior Full-Stack Developer</p>
              <Button
                variant="light"
                className="text-secondary bg-white border border-black rounded-pill px-3"
              >
                <BsPersonAdd className="me-2" />
                Collegati
              </Button>
            </div>
          </div>
          <h5 className="pt-2  text-center border-top text-secondary mt-4">
            Mostra tutto
          </h5>
        </div>
      </Col>
    </>
  )
}

export default People
