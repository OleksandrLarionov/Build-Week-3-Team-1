import { Col } from 'react-bootstrap'
import { BsFillPencilFill } from 'react-icons/bs'

const Setup = () => {
  return (
    <>
      <Col className=" mt-0 border rounded-3 p-3  elements mb-1">
        <div>
          <div className="d-flex justify-content-between">
            <div>
              <h6 className='fw-bold'>Lingua del profilo</h6>
              <p className="text-secondary">Italiano</p>
            </div>
            <div>
              <BsFillPencilFill />
            </div>
          </div>
          <hr />
          <div className="d-flex justify-content-between">
            <div>
              <h6 className='fw-bold'>Public profile & URL</h6>
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
