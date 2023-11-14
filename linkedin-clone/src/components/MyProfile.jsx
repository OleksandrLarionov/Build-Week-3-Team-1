import { Col } from "react-bootstrap";
import Visited from "./MyProfileComponents/Visited";
import MainCard from "./MyProfileComponents/MainCard";
import Suggested from "./MyProfileComponents/Suggested";
import Resources from "./MyProfileComponents/Resources";
import Activities from "./MyProfileComponents/Activities";
import Experience from "./MyProfileComponents/Experience";
import Education from "./MyProfileComponents/Education";
import Competencies from "./MyProfileComponents/Competencies";
// forse è meglio chiamrla MyProfile,
const MyProfile = () => {
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

export default MyProfile;
