import './App.css';
import Aside from './components/Aside';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import TestComp from './components/TestComp';
import ModalProfiles from './components/modal/ModarlProfiles';
import { useSelector } from 'react-redux';
import MyCentral from './components/MyCentral';
import { Row} from 'react-bootstrap';

function App() {
	const modal = useSelector((state) => state.profile.modal && state.profile.modal[0]);
	return (
		<>
			<div className={modal ? 'active-modal' : ''}>

			<Row className='justify-content-center'>
    <MyCentral/>
    </Row>
				<Aside />
				<ModalProfiles />
				<Footer />
				<TestComp />
			</div>
		</>
	);
}

export default App;
