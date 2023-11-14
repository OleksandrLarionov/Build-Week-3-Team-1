import { Col, Container, Row } from 'react-bootstrap'
import ShowProfile from './ShowProfile'
import DiscoverMore from './DiscoverMore'
import CreatePost from './CreatePost'
import News from './News'

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
        <Col sm={12} md={3}>
          <News />
        </Col>
      </Row>
    </Container>
  )
}

export default Home
