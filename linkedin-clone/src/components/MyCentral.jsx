import { Col } from "react-bootstrap";
import Visited from "./MyCentralComponents/Visited";
import MainCard from "./MyCentralComponents/MainCard";
import Suggested from "./MyCentralComponents/Suggested";
import Resources from "./MyCentralComponents/Resources";
import Activities from "./MyCentralComponents/Activities";
import Experience from "./MyCentralComponents/Experience";
import Education from "./MyCentralComponents/Education";
import Competencies from "./MyCentralComponents/Competencies";

const MyCentral = () => {
  return (
    <Col className="col-xs-12 col-md-8 col-lg-7 justify-content-center">
      <Visited />
      <MainCard />
      <Suggested />
      <Resources /> 
      <Activities/>
      <Experience/> 
      <Education/> 
       <Competencies/>
      {/*   
        
        
        
       
       
         <Referencies/>
         <Languages/>
         <Interests/> */}
    </Col>
  );
};

export default MyCentral;
