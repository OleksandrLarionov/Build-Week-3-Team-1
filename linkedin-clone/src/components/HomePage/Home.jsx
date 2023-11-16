import { Col, Container, Row } from "react-bootstrap";
import ShowProfile from "./HomeComponents/ShowProfile";
import DiscoverMore from "./HomeComponents/DiscoverMore";
import News from "./HomeComponents/News";
import FooterHome from "./HomeComponents/FooterHome";
import AllPost from "./HomeComponents/AllPost";

const Home = () => {
  return (
   
      <Row className="justify-content-center">
        <Col sm={11} md={4} lg={3} className="d-flex flex-column align-items-center">
          <ShowProfile/>
          <DiscoverMore />
        </Col>
        <Col sm={11} md={7} lg={5}>
          <AllPost/>
        </Col>
        <Col sm={11} md={11} lg={3}>
          <News />
          <FooterHome />
        </Col>
      </Row>
  
  );
};

export default Home;
