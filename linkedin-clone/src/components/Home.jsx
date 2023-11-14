import { Col, Container, Row } from 'react-bootstrap'
import ShowProfile from './ShowProfile'
import DiscoverMore from './DiscoverMore'
import CreatePost from './CreatePost'

const Home = () => {
  return (
    <Container>
      <Row>
        <Col sm={12} md={3}>
          <ShowProfile />
          <DiscoverMore />
        </Col>
        <Col sm={12} md={6}>
          <CreatePost />
        </Col>
        <Col sm={12} md={3}></Col>
      </Row>
    </Container>
  )
}

export default Home
