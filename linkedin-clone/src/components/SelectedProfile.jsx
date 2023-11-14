import { Col } from "react-bootstrap";
import Visited from "./MyProfileComponents/Visited";
import MainCard from "./MyProfileComponents/MainCard";
import Activities from "./MyProfileComponents/Activities";
import Experience from "./MyProfileComponents/Experience";
import Education from "./MyProfileComponents/Education";
import Competencies from "./MyProfileComponents/Competencies";

const SelectedProfile = () => {
  return (
    <Col className="col-xs-12 col-md-8 col-lg-7 justify-content-center">
      <Visited/>
      <MainCard/>
      <Activities/>
      <Experience/> 
      <Education/> 
       <Competencies/>
    </Col>
  );
};

export default SelectedProfile
    ;
