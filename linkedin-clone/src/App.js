import "./App.css";
import Aside from "./components/Aside";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import TestComp from "./components/TestComp";
import ModalProfiles from "./components/modal/ModarlProfiles";
import { useSelector } from "react-redux";
import MyCentral from "./components/MyCentral";
import { Row } from "react-bootstrap";
import MyNavbar from "./components/MyNavbar";

function App() {
  const modal = useSelector(
    (state) => state.profile.modal && state.profile.modal[0]
  );
  return (
    <>
      <div className={modal ? "active-modal" : ""}>
		<MyNavbar/>
        <Row className="justify-content-center">
          <MyCentral /> 
		  <Aside />
        </Row>
       <Footer />
        <ModalProfiles />
        
        <TestComp />
      </div>
    </>
  );
}

export default App;
