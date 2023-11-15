import { Col, Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Jobs = () => {
  const jobsData = useSelector((state) => state.job.list)
  return (
    <Container>
      <Row className="mx-0 mt-3 p-3 justify-content-center">
        {jobsData.map((job) => {
          return (
            <div
              className="w-25 elements m-2 p-2 text-center rounded-3 d-flex flex-column justify-content-between "
              style={{ border: '1px solid #00000033', borderRadius: 4 }}
            >
              <Col>
                <Link to={`${job.url}`}>
                  Azienda <br />
                  {job.company_name}{' '}
                </Link>
              </Col>
              <Col>
                <a href={job.url} target="_blank" rel="noreferrer">
                  {job.title}
                </a>
              </Col>
            </div>
          )
        })}
      </Row>
    </Container>
  )
}

export default Jobs
