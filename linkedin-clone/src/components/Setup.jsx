import { Col } from 'react-bootstrap'
import { BsFillPencilFill } from 'react-icons/bs'

const Setup = () => {
  return (
    <>
      <Col className="m-2 border rounded-3 p-3">
        <div>
          <div className="d-flex justify-content-between">
            <div>
              <h5>Lingua del profilo</h5>
              <p className="text-secondary">Italiano</p>
            </div>
            <div>
              <BsFillPencilFill />
            </div>
          </div>
          <hr />
          <div className="d-flex justify-content-between">
            <div>
              <h5>Public profile & URL</h5>
              <p className="text-secondary">www.linkedin.com/</p>
            </div>
            <div>
              <BsFillPencilFill />
            </div>
          </div>
        </div>
      </Col>
    </>
  )
}

export default Setup
