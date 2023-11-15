import { Row, Col, DropdownButton, Dropdown} from 'react-bootstrap';
import { ImPencil } from 'react-icons/im';
import { BsPlus } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getUserExperience } from '../../../redux/action/experience';
import { FaBriefcase } from 'react-icons/fa';
import { BsCalendarDate } from 'react-icons/bs';
import ExperienceModal from '../../modal/ExperienceModal';
import { parseISO, format } from 'date-fns';
import { it } from 'date-fns/locale';

const Experience = () => {
	const dispatch = useDispatch();
	const getExp = useSelector((state) => state.experience.experienceData[0]);
	useEffect(() => {
		dispatch(getUserExperience());
	}, []);
	const [modalShow, setModalShow] = useState(false);
	return (
		<Row className='elements mb-1 pb-3'>
			<ExperienceModal show={modalShow} onHide={() => setModalShow(false)} />

			<Col className='col-12 d-flex align-items-center justify-content-between pb-3'>
				<span className='fw-bold fs-5 pt-3 mb-0'>Esperienza</span>
				<div className='text-secondary me-3 experience-btn d-flex'>
					<DropdownButton
						className='rounded-circle'
						drop='start'
						variant=''
						title={<BsPlus className='fs-3' />}>
						<Dropdown.Item onClick={() => setModalShow(true)}>
							<FaBriefcase className='me-2 fs-4' />
							Aggiungi Posizione Lavorativa
						</Dropdown.Item>
						<Dropdown.Item>
							{' '}
							<BsCalendarDate className='me-2 fs-4' />
							Aggiungi Pausa Lavorativa
						</Dropdown.Item>
					</DropdownButton>
					<div className='justify-content-center align-items-center d-flex'>
						<ImPencil />
					</div>
				</div>
			</Col>
			{getExp && (
				<>
					<Col className='col-2 display-4'>
						<img src={getExp.image} alt={getExp.description} width={100} />
					</Col>
					<Col className='col-7'>
						<p className='fw-bold mb-0' style={{ fontSize: '0.9rem' }}>
							{getExp.role}
						</p>
						<p className='mb-0 ' style={{ fontSize: '0.8rem' }}>
							{getExp.company}
						</p>
						<p className='mb-0 text-secondary' style={{ fontSize: '0.8rem' }}>
							{format(parseISO(getExp.startDate), 'd MMM yyyy ', { locale: it })}
							<br />
							{getExp.area} <br />
						</p>
					</Col>
				</>
			)}
		</Row>
	);
};

export default Experience;
