import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TestComp from './components/TestComp';
import ModalProfiles from './components/modal/ModarlProfiles';
import { useSelector } from 'react-redux';
import Access from './components/AccessPage/Access';
import { Row } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Jobs from './components/JobsPage/Jobs';
import Home from './components/HomePage/Home';
import MyProfile from './components/ProfileComponents/MyProfile';
import ExperienceDetail from './components/ProfileComponents/ExperienceDetail';
import NotFound from './components/NotFound';


function App() {
	const modal = useSelector((state) => state.profile.modal && state.profile.modal[0]);
	return (
		<>
			<BrowserRouter>
				<div className='position-relative'>
					<div className={modal ? 'active-modal' : ''}>
					  
						<Routes>
							<Route element={<Access/>} path='/'/>
							<Route element={<Jobs />} path='/Jobs' />
							<Route element={<Home />} path='/Home' />
							<Route element={<ExperienceDetail />} path='/detail/experience' />
							<Route element={<MyProfile />} path='/MyProfile' />
							<Route element={<MyProfile />} path='/user/:userId' />
							<Route path='*' element={<NotFound />} />
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
