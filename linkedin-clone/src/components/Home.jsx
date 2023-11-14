import { Col, Container, Row } from 'react-bootstrap'
import ShowProfile from './ShowProfile'
import DiscoverMore from './DiscoverMore'

const Home = () => {
  return (
    <Container>
      <Row>
        <Col>
          <ShowProfile />
          <DiscoverMore />
        </Col>
        <Col></Col>
        <Col></Col>
      </Row>
    </Container>
  )
}

export default Home
