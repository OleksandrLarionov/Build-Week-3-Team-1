import { format, parseISO } from 'date-fns';
import { useEffect, useState } from 'react';
import { Col, Dropdown, DropdownButton, ListGroup, Row } from 'react-bootstrap';
import { BsCalendarDate, BsPlus } from 'react-icons/bs';
import { FaBriefcase } from 'react-icons/fa';
import { ImPencil } from 'react-icons/im';
import { useDispatch, useSelector } from 'react-redux';
import { getUserExperience } from '../../redux/action/experience';
import ExperienceModal from '../modal/ExperienceModal';
import { it } from 'date-fns/locale';
import { IoArrowBackOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import ExpModalMody from '../modal/ExpModalMody';

const ExperienceDetail = () => {
	const dispatch = useDispatch();
	const getExp = useSelector((state) => state.experience.experienceData);
	useEffect(() => {
		dispatch(getUserExperience());
	}, []);
	const [modalShow, setModalShow] = useState(false);
	const [modalSnow, setModalSnow] = useState(false);
	const [exp, setExp] = useState(null);

	return (
		<Row>
			<ExperienceModal show={modalSnow} onHide={() => setModalSnow(false)} />;<Col md={3}></Col>
			<Col md={6}>
				{' '}
				<Row className='elements mb-1 pb-3'>
					<Col className='col-12 d-flex align-items-center justify-content-between pb-3'>
						<span className='fw-bold fs-5 pt-3 mb-0'>
							<Link to='/MyProfile'>
								<IoArrowBackOutline className='fs-3 me-2 text-secondary' />
							</Link>
							Esperienza
						</span>
						<div className='text-secondary experience-btn d-flex'>
							<DropdownButton
								className=' p-0'
								drop='start'
								variant=''
								title={<BsPlus className='fs-3' />}>
								<Dropdown.Item onClick={() => setModalSnow(true)}>
									<FaBriefcase className='me-2 fs-4' />
									Aggiungi Posizione Lavorativa
								</Dropdown.Item>
								<Dropdown.Item>
									{' '}
									<BsCalendarDate className='me-2 fs-4' />
									Aggiungi Pausa Lavorativa
								</Dropdown.Item>
							</DropdownButton>
						</div>
					</Col>
					<ListGroup className='p-0'>
						<ExpModalMody show={modalShow} onHide={() => setModalShow(false)} id={exp} />
						{getExp &&
							getExp
								.slice()
								.reverse()
								.map((oneExp, i) => {
									return (
										<ListGroup.Item key={oneExp._id}>
											<Row>
												<Col className='col-2 display-4'>
													<img src={oneExp.image} alt={i} width={100} />
												</Col>
												<Col className='col-7'>
													<p className='fw-bold mb-0' style={{ fontSize: '0.9rem' }}>
														{oneExp.role}
													</p>
													<p className='mb-0 ' style={{ fontSize: '0.8rem' }}>
														{oneExp.company}
													</p>
													<p
														className='mb-0 text-secondary'
														style={{ fontSize: '0.8rem' }}>
														{format(parseISO(oneExp.startDate), 'd MMM yyyy ', {
															locale: it,
														})}
														<br />
														{oneExp.area} <br />
													</p>
												</Col>
												<Col className='text-end'>
													<ImPencil
														className='me-3'
														onClick={() => {
															setExp(oneExp._id);
															setModalShow(true);
														}}
													/>
												</Col>
											</Row>
										</ListGroup.Item>
									);
								})}
					</ListGroup>
				</Row>
			</Col>
			<Col md={3}></Col>
		</Row>
	);
};

export default ExperienceDetail;
