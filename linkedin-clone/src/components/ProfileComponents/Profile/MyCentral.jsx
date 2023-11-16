import { Col } from "react-bootstrap";
import Visited from "../MyCentralComponents/Visited";
import MainCard from "../MyCentralComponents/MainCard";
import Suggested from "../MyCentralComponents/Suggested";
import Resources from "../MyCentralComponents/Resources";
import Activities from "../MyCentralComponents/Activities";
import Experience from "../MyCentralComponents/Experience";
import Education from "../MyCentralComponents/Education";
import Competencies from "../MyCentralComponents/Competencies";
import Languages from "../MyCentralComponents/Languages";

const MyCentral = () => {
  return (
    <Col className="col-xs-12 col-sm-10 col-md-6 col-lg-7 justify-content-center me-md-3 position-relative">
      <Visited />
      <MainCard />
      <Suggested />
      <Resources />
      <Activities />
      <Experience />
      <Education />
      <Competencies />
      <Languages />
    </Col>
  );
};

export default MyCentral;
