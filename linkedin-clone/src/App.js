import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import TestComp from './components/TestComp';
import ModalProfiles from './components/modal/ModarlProfiles';
import { useSelector } from 'react-redux';

import { Row } from 'react-bootstrap';
import MyNavbar from './components/ProfileComponents/MyNavbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Jobs from './components/JobsPage/Jobs';
import ProfileEffect from './components/ProfileComponents/MyCentralComponents/ProfileEffect';
import Home from './components/HomePage/Home';
import MyProfile from './components/ProfileComponents/MyProfile';
import ExperienceDetail from './components/ProfileComponents/ExperienceDetail';

function App() {
	const modal = useSelector((state) => state.profile.modal && state.profile.modal[0]);
	return (
		<>
			<BrowserRouter>
				<div className='position-relative'>
					<div className={modal ? 'active-modal' : ''}>
						<MyNavbar />
						<ProfileEffect />
						<Routes>
							<Route element={<Jobs />} path='/Jobs' />
							<Route element={<Home />} path='/' />
							<Route element={<ExperienceDetail />} path='/detail/experience' />
							<Route element={<MyProfile />} path='/MyProfile' />
						</Routes>
						<Row className='justify-content-center mx-0'></Row>

						<ModalProfiles />

						<TestComp />
					</div>
				</div>
			</BrowserRouter>
		</>
	);
}

export default App;
