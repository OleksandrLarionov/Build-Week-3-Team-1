import { Col } from 'react-bootstrap'
import { BsLinkedin } from 'react-icons/bs'

const InLearning = () => {
  return (
    <>
      <Col className="border rounded-3 p-3 m-2">
        <div>
          <h5 className="font-monospace fs-6">
            <BsLinkedin /> LEARNING
          </h5>
          <p>Aggiungi nuove competenze con questi corsi, gratuiti per 24 ore</p>
          <div className="d-flex">
            <img
              src="https://media.licdn.com/dms/image/C4E0DAQGde-PgGw0jSw/learning-public-crop_60_100/0/1567117664433?e=1700474400&v=beta&t=wGX-4xoiPxoyJlXopQ4YhF2SrwbC0BlkWjqjdcERvJ8"
              alt=""
              className="me-2"
            />
            <div>
              <p className="fw-bold lh-1 mb-2">
                Excel: formule e funzioni avanzate
              </p>
              <p className="text-secondary mb-0">68.480 visualizzazioni</p>
            </div>
          </div>
          <hr />
          <div className="d-flex">
            <img
              src="https://media.licdn.com/dms/image/C4E0DAQE0WwgEYNrb8g/learning-public-crop_60_100/0/1568661625754?e=1700474400&v=beta&t=xj3co4TbAQrDgNhQSjqzXANcFIycpxgWHGfbLlui3dE"
              alt=""
              className="me-2"
            />
            <div>
              <p className="fw-bold lh-1 mb-2">
                Formazione essenziale su Excel 2016
              </p>
              <p className="text-secondary mb-0">4.744 visualizzazioni</p>
            </div>
          </div>
          <hr />
          <div className="d-flex">
            <img
              src="https://media.licdn.com/dms/image/C560DAQH4lycjLIibMw/learning-public-crop_60_100/0/1627584100061?e=1700474400&v=beta&t=e1uJ1YdGmkrp4diyEhVdpZ0fi76CSDwA7_ZeL-sKdx0"
              alt=""
              className="me-2"
            />
            <div>
              <p className="fw-bold lh-1 mb-2">
                Excel: VLOOKUP e XLOOKUP per...
              </p>
              <p className="text-secondary mb-0">17.168 visualizzazioni</p>
            </div>
          </div>
          <h5 className="pt-2  text-center border-top text-secondary mt-4">
            Visualizza i miei suggerimenti
          </h5>
        </div>
      </Col>
    </>
  )
}

export default InLearning
