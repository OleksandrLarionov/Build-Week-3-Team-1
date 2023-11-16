import MyCentral from "./Profile/MyCentral";
import Aside from "./Profile/Aside";
import Footer from "./Profile/Footer";
import { Row } from "react-bootstrap";
import ProfileEffect from "../ProfileComponents/MyCentralComponents/ProfileEffect";
import MyNavbar from "../ProfileComponents/MyNavbar";

const MyProfile = () => {
  return (
    <>
    <MyNavbar/> 
     <ProfileEffect/>
      <Row className="justify-content-center">
      <MyCentral />
      <Aside />
      <Footer />
    </Row>
</>  );
};

export default MyProfile;
