import {
	Col,
	Row,
	Offcanvas,
	Button,
	NavLink,
	Form,
	Nav,
	Navbar,
	NavDropdown,
} from 'react-bootstrap';
import { HiMiniUsers } from 'react-icons/hi2';
import { PiHandbagSimpleFill, PiVideoFill } from 'react-icons/pi';
import { BsFillGrid3X3GapFill, BsFillBellFill, BsPlus } from 'react-icons/bs';
import { MdArrowDropDown } from 'react-icons/md';
import { FaCompass } from 'react-icons/fa';
import { FaMoneyBillTrendUp } from 'react-icons/fa6';
import { FcAdvertising, FcTemplate, FcCollaboration, FcBarChart } from 'react-icons/fc';
import { AiFillHome, AiFillMessage } from 'react-icons/ai';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { handleSubmitAction } from '../../redux/action';

const MyNavbar = () => {
	const [showOffcanvas, setShowOffcanvas] = useState(false);

	const toggleOffcanvas = () => {
		setShowOffcanvas(!showOffcanvas);
	};

	const [query, setQuery] = useState('');
	const dispatch = useDispatch();
	const location = useLocation();
	const user = useSelector((state) => state.user.userData);

	const handleChange = (e) => {
		setQuery(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(handleSubmitAction(query));
		location.href = 'localhost:3000/Jobs';
	};

	return (
		<Row className='justify-content-cente mb-3 mynav'>
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
												<svg
													xmlns='http://www.w3.org/2000/svg'
													viewBox='0 0 24 24'
													data-supported-dps='24x24'
													fill='currentColor'
													className='mercado-match'
													width='45'
													height='45'
													focusable='false'
													style={{ color: '#0A66C2' }}>
													<path d='M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z'></path>
												</svg>
											</Navbar.Brand>

											<Form
												style={{ width: '99%' }}
												className='me-5 smallOne'
												onSubmit={handleSubmit}>
												<Link to='/jobs' className='text-decoration-none'>
													<Form.Control
														type='search'
														placeholder='Cerca'
														className='me-4 ms-1 ps-3'
														aria-label='Search'
														id='color-placeholder'
														value={query}
														onChange={handleChange}
													/>
												</Link>
											</Form>
										</div>
										{/* 2 Div principale Navbar */}
										<div
											className='d-flex justify-content-around align-items-center border-end listSmall'
											style={{ height: '50px' }}>
											<div className='d-flex flex-column '>
												<Link
													className={
														location.pathname === '/' ? 'nav-link active' : 'nav-link'
													}
													to='/'>
													<p className='text-center mb-0 '>
														<AiFillHome className='fs-4 text-secondary black' />
														Home
													</p>
												</Link>
											</div>

											<div className='d-flex flex-column '>
												<Nav.Link
													href='#'
													className={
														location.pathname === '/ret'
															? 'nav-link active'
															: 'nav-link'
													}>
													<p className='text-center mb-0 py-0 '>
														<HiMiniUsers className='fs-4 text-secondary black' />
														<br />
														Rete
													</p>
												</Nav.Link>
											</div>

											<div className='d-flex flex-column  ms-2 '>
												<Link
													className={
														location.pathname === '/Jobs'
															? 'nav-link active'
															: 'nav-link'
													}
													to='/Jobs'>
													<p className='text-center mb-0 py-0 '>
														<PiHandbagSimpleFill className='fs-4 text-secondary black' />
														<br />
														Lavoro
													</p>
												</Link>
											</div>

											<div className='d-flex flex-column  ms-2 '>
												<Nav.Link
													href='#'
													className={
														location.pathname === '/messagistica'
															? 'nav-link active'
															: 'nav-link'
													}>
													<p className='text-center mb-0 py-0 '>
														<AiFillMessage className='fs-4 text-secondary black' />
														<br />
														Messaggistica
													</p>
												</Nav.Link>
											</div>

											<div>
												<Nav.Link href='#' className='nav-link'>
													<p className='text-center mb-0 py-0'>
														<BsFillBellFill className='fs-4 text-secondary black' />
														<br />
														Notifiche
													</p>
												</Nav.Link>
											</div>

											<Nav.Link
												href='#'
												className={
													location.pathname === '/MyProfile'
														? 'py-0 nav-link active'
														: 'py-0 nav-link'
												}>
												<div className='d-flex flex-column align-items-center justify-content-center me-2'>
													<img
														src={user[0]?.image}
														alt='profileImage moreBig'
														className='rounded-pill '
														id='moreBig'
														width={25}
														height={25}
													/>
													<NavDropdown
														title='tu'
														id='navbarScrollingDropdown'
														className='dropstart goingDown'>
														<NavDropdown.Item href='#action3'>
															<div className='d-flex align-items-center'>
																<p className='fs-1 me-2'>
																	<img
																		src={user[0]?.image}
																		alt='profileImage'
																		className='rounded-pill border'
																		width={55}
																		height={55}
																	/>
																</p>
																<div className='d-flex flex-column'>
																	<p
																		className='d-flex lh-1 align-items-center mt-1 mb-1 fw-bold'
																		style={{ fontSize: '1.2rem' }}>
																		{user[0]?.name} {user[0]?.surname}
																	</p>
																	<p className='lh-1'>{user[0]?.title}</p>
																</div>
															</div>
														</NavDropdown.Item>

														<NavDropdown.Item href='#action4'>
															<Link to='/MyProfile' className='text-decoration-none'>
																<Button
																	className=' d-flex justify-content-center align-items-center  rounded-pill w-100 px-auto '
																	variant='outline-primary'
																	style={{ height: '25px' }}>
																	Visualizza profilo
																</Button>
															</Link>
														</NavDropdown.Item>
														<a href='https://premium.linkedin.com/' target='_blank'>
                                                           Vai a LinkedIn Premium
                                                        </a>
														<NavDropdown.Item  >
															<NavLink
																className='p-1 '
																style={{ fontSize: '0.9rem' }}>
																<p className='lh-1 mb-0'>Impostazione e privacy</p>
															</NavLink>
															<NavLink
																className='p-1 '
																style={{ fontSize: '0.9rem' }}>
																<p className='lh-1 mb-0'>Guida</p>
															</NavLink>
															<NavLink
																className='p-1 border-bottom'
																style={{ fontSize: '0.9rem' }}>
																<p className='lh-1 mb-2'> Lingua</p>
															</NavLink>
															<h6
																className='pt-3 fw-bold'
																style={{ fontSize: '0.9rem' }}>
																Gestisci
															</h6>
															<NavLink
																className='p-1 '
																style={{ fontSize: '0.9rem' }}>
																<p className='lh-1 mb-0'>Post è attività</p>
															</NavLink>
															<NavLink
																className='p-1 '
																style={{ fontSize: '0.9rem' }}>
																<p className='lh-1 mb-2'>
																	Account per la pubblicazione di
																	<br /> offerte di lavoro
																</p>
															</NavLink>
															<h6 className='pt-3 fw-bold border-top pt-2'>Esci</h6>
														</NavDropdown.Item>
													</NavDropdown>
												</div>
											</Nav.Link>
										</div>
									</Nav>
								</Navbar.Collapse>
							</div>
						</Col>

						<Col className='col-3 d-flex align-items-center position-relative toHide'>
							<div className='d-flex justify-content-between align-items-center'>
								<div className='d-flex justify-content-end mt-3'>
									<div className='text-center smallTwo ' onClick={toggleOffcanvas}>
										<BsFillGrid3X3GapFill className='fs-4 text-secondary black' />
										<p>
											Per le aziende
											<MdArrowDropDown />
										</p>
									</div>
								</div>
								<Offcanvas
									placement='end'
									show={showOffcanvas}
									onHide={() => setShowOffcanvas(false)}>
									<Offcanvas.Header closeButton>
										<Offcanvas.Title className='fw-bold'>Per le aziende</Offcanvas.Title>
									</Offcanvas.Header>
									<Offcanvas.Body>
										<Row className='d-flex border rounded mx-2 '>
											<Col className=' col-12 d-flex pt-2 justify-content-between'>
												<div className='text-center' style={{ width: '100px' }}>
													<PiVideoFill className='text-primary fs-1 border' />
													<p className='lh-1 pt-2' style={{ fontSize: '0.9rem' }}>
														Learning
													</p>
												</div>
												<div className='text-center' style={{ width: '100px' }}>
													<FcBarChart className='fs-1  border  ' />
													<p className='lh-1 pt-2' style={{ fontSize: '0.9rem' }}>
														Talent Insights
													</p>
												</div>
												<div className='text-center' style={{ width: '100px' }}>
													<FcTemplate className='text-info fs-1  border ' />
													<p className='lh-1 pt-2' style={{ fontSize: '0.9rem' }}>
														Pubblica un’offerta di lavoro
													</p>
												</div>
												<div className='text-center' style={{ width: '100px' }}>
													<FcAdvertising className='text-info fs-1  border ' />
													<p className='lh-1 pt-2' style={{ fontSize: '0.9rem' }}>
														Pubblicizza
													</p>
												</div>
											</Col>
											<Col className=' col-12 d-flex justify-content-start'>
												<div className='text-center' style={{ width: '85px' }}>
													<FaCompass className='text-info fs-1  border ' />
													<p className='lh-1 pt-2' style={{ fontSize: '0.9rem' }}>
														Trova nuovi clienti
													</p>
												</div>
												<div className='text-center' style={{ width: '70px' }}>
													<FcCollaboration className='text-info fs-1  border ' />
													<p className='lh-1 pt-2' style={{ fontSize: '0.9rem' }}>
														Gruppi
													</p>
												</div>
												<div className='text-center' style={{ width: '95px' }}>
													<FaMoneyBillTrendUp className='text-info fs-1  border ' />
													<p className='lh-1 pt-2' style={{ fontSize: '0.9rem' }}>
														Marketplace dei servizi
													</p>
												</div>
											</Col>
										</Row>
										<Row className='border rounded-top mx-2 mt-2'>
											<div className='border-bottom ps-0'>
												<h6 className='text-start mt-2 fw-bold ps-4'>
													Scopri altro per il business
												</h6>
											</div>
											<div className=' ps-4 pt-2'>
												<div className='fw-bold'>
													<div>
														<p className='lh-1 mb-1' style={{ fontSize: '0.9rem' }}>
															{' '}
															Assumi su LinkedIn
														</p>
														<p
															className='fw-normal lh-1'
															style={{ fontSize: '0.8rem' }}>
															Trova, attrai e assumi
														</p>
													</div>
													<div>
														<p className='lh-1 mb-1' style={{ fontSize: '0.9rem' }}>
															Vendi con LinkedIn
														</p>
														<p
															className='fw-normal lh-1'
															style={{ fontSize: '0.8rem' }}>
															Costruisci relazioni con i buyer
														</p>
													</div>
													<div>
														<p className='lh-1 mb-1' style={{ fontSize: '0.9rem' }}>
															Offerta di lavoro gratuita
														</p>
														<p
															className='fw-normal lh-1'
															style={{ fontSize: '0.8rem' }}>
															{' '}
															Trova candidati di qualità
														</p>
													</div>
													<div>
														<p className='lh-1 mb-1' style={{ fontSize: '0.9rem' }}>
															Fai pubblicità su LinkedIn
														</p>
														<p
															className='fw-normal lh-1'
															style={{ fontSize: '0.8rem' }}>
															Acquisisci clienti e fai crescere la tua azienda
														</p>
													</div>
													<div>
														<p className='lh-1 mb-1' style={{ fontSize: '0.9rem' }}>
															Impara con LinkedIn
														</p>
														<p
															className='fw-normal lh-1'
															style={{ fontSize: '0.8rem' }}>
															{' '}
															Corsi per formare i tuoi dipendenti
														</p>
													</div>
													<div>
														<p className='lh-1 mb-1' style={{ fontSize: '0.9rem' }}>
															Centro amministrazione
														</p>
														<p
															className='fw-normal lh-1'
															style={{ fontSize: '0.8rem' }}>
															Gestisci i dettagli di fatturazione e account
														</p>
													</div>
												</div>
											</div>
										</Row>
										<Row className='border border-top-0 rounded-bottom mx-2 ps-4'>
											<p
												className='lh-1 mb-1 fw-bold py-2'
												style={{ fontSize: '0.9rem' }}>
												Crea una pagina aziendale <BsPlus className='fs-4' />
											</p>
										</Row>
									</Offcanvas.Body>
								</Offcanvas>
							</div>

							<div className='smallOne'>
							<a className='fw-medium text-center px-1 different' id='link'
                              style={{ width: '100px' }}
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
