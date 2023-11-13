import { Col } from "react-bootstrap";
import Visited from "./Visited";
import MainCard from "./MainCard";
import Suggested from "./Suggested";
import Resources from "./Resources";

const MyHome = () => {
  return (
    <Col className="col-xs-12 col-md-8 col-lg-7 justify-content-center">
      <Visited />
      <MainCard />
      <Suggested />
      <Resources />
      {/*   
        
         <Activities/>
         <Experience/>
         <Education/>
         <Competencies/>
         <Referencies/>
         <Languages/>
         <Interests/> */}
    </Col>
  );
};

export default MyHome;
