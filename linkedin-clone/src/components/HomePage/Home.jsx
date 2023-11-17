import { Col, Row } from "react-bootstrap";
import ShowProfile from "./HomeComponents/ShowProfile";
import DiscoverMore from "./HomeComponents/DiscoverMore";
import News from "./HomeComponents/News";
import FooterHome from "./HomeComponents/FooterHome";
import AllPost from "./HomeComponents/AllPost"
import ProfileEffect from "../ProfileComponents/MyCentralComponents/ProfileEffect";
import MyNavbar from "../ProfileComponents/MyNavbar";

const Home = () => {
  return (
   <> 
   <MyNavbar/> 
   <ProfileEffect/>
       <Row className="justify-content-center">
        <Col sm={11} md={4} lg={2} xl={2} className="d-flex flex-column align-items-center">
          <ShowProfile/>
          <DiscoverMore />
        </Col>
        <Col sm={11} md={7} lg={5} xl={5}>
          <AllPost/>
        </Col>
        <Col sm={11} md={11} lg={3} xl={3}>
          <News />
          <FooterHome />
        </Col>
      </Row>
      </>);
};

export default Home;
