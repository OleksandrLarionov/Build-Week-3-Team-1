import MyCentral from "./Profile/MyCentral";
import Aside from "./Profile/Aside";
import Footer from "./Profile/Footer";
import { Row } from "react-bootstrap";

const MyProfile = () => {
  return (
    <Row className="justify-content-center">
      <MyCentral />
      <Aside />
      <Footer />
    </Row>
  );
};

export default MyProfile;
