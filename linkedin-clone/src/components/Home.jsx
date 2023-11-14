import { Col, Container, Row } from 'react-bootstrap'
import ShowProfile from './ShowProfile'

const Home = () => {
  return (
    <Container>
      <Row>
        <Col>
          <ShowProfile />
        </Col>
        <Col></Col>
        <Col></Col>
      </Row>
    </Container>
  )
}

export default Home
