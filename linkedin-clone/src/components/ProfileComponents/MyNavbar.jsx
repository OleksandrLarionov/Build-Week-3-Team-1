import { Col, Row, Nav, Navbar } from 'react-bootstrap';
import NavBrand from './Profile/nav/NavBrand';
import SearchNav from './Profile/nav/SearchNav';
import NavBarIcons from './Profile/nav/NavBarIcons';
import OffCanvasComponent from './Profile/nav/OffCanvasComponent';
const MyNavbar = () => {
	return (
		<Row className='justify-content-center mb-3 mx-0 mynav border-bottom'>
			<Col className='p-0 '>
				<Navbar
					expand='md'
					className='bg-white justify-content-center px-auto align-items-center'
					style={{ fontSize: '0.7rem', height: '60px' }}>
					<Row className='d-flex justify-content-center px-2 mx-0 '>
						<Col className='d-flex align-items-center pe-0 '>
							<div>
								<Navbar.Toggle aria-controls='navbarScroll' className='small' />
								<Navbar.Collapse id='navbarScroll'>
									<Nav className='my-2 ' style={{ maxHeight: '100px' }} navbarScroll>
										<div className='d-flex justify-content-center align-items-center '>
											<Navbar.Brand href='#' className='me-0 smallOne'>
												<NavBrand />
											</Navbar.Brand>
											<SearchNav />
										</div>
										{/* 2 Div principale Navbar */}
										<NavBarIcons />
									</Nav>
								</Navbar.Collapse>
							</div>
						</Col>
						<Col className='col-3 d-flex align-items-center position-relative toHide'>
							<div className='d-flex justify-content-between align-items-center'>
								<OffCanvasComponent />
							</div>

							<div className='smallOne text-center'>
								<a
									className='fw-medium px-1 different'
									id='link'
									href='https://premium.linkedin.com/'
									target='_blank'
									rel='noopener noreferrer'>
									Prova Premium per 0 EUR
								</a>
							</div>
						</Col>
					</Row>
				</Navbar>
			</Col>
		</Row>
	);
};

export default MyNavbar;
