import {Col} from 'react-bootstrap'
import Visited from './Visited';
import MainCard from './MainCard';

const MyHome = () => {
    return ( 
        <Col className="col-xs-12 col-md-8 col-lg-7 justify-content-center">
         <Visited/>
         <MainCard/>
       {/*   <Suggested/>
         <Resource/>
         <Activities/>
         <Experience/>
         <Training/>
         <Competencies/>
         <Referencies/>
         <Languages/>
         <Interests/> */}
         </Col>
     );
}
 
export default MyHome;