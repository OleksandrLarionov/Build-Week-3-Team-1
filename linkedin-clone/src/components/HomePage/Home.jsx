import { Col, Container, Row } from "react-bootstrap";
import ShowProfile from "./HomeComponents/ShowProfile";
import DiscoverMore from "./HomeComponents/DiscoverMore";
import News from "./HomeComponents/News";
import FooterHome from "./HomeComponents/FooterHome";
import AllPost from "./HomeComponents/AllPost";

const Home = () => {
  return (
    <Container>
      <Row>
        <Col sm={12} md={3} className="d-flex flex-column align-items-center">
          <ShowProfile/>
          <DiscoverMore />
        </Col>
        <Col sm={12} md={6}>
          <AllPost/>
        </Col>
        <Col sm={12} md={3}>
          <News />
          <FooterHome />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
