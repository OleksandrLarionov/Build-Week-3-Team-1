import { Row, Col } from 'react-bootstrap';
import { AiFillEye } from 'react-icons/ai';
import { GiRadarDish } from 'react-icons/gi';
import { BsPeopleFill, BsArrowRight } from 'react-icons/bs';
import { useParams } from 'react-router-dom';

const Resources = () => {
	const params = useParams();

	return (
		<Row className={params.userId ? 'd-none' : 'elements my-1 d-block'}>
			<p className='fw-bold fs-5 pt-3 mb-0'>Risorse</p>
			<p className='text-secondary d-flex align-items-center' style={{ fontSize: '0.9rem' }}>
				{' '}
				<AiFillEye className='fs-6' /> Solo per te
			</p>
			<Row>
				<Col className='col-1'>
					<GiRadarDish className='fs-5 ' />
				</Col>
				<Col className='col-10 ps-2'>
					<p className='fw-bold lh-2 mb-0' style={{ fontSize: '1rem' }}>
						Modalità creazione di contenuti
						<span
							className='ms-2 rounded p-1'
							style={{ backgroundColor: 'rgb(232,232,232)' }}>
							No
						</span>
					</p>
					<p style={{ fontSize: '0.8rem' }}>
						Fatti scoprire, metti in risalto i contenuti sul tuo profilo e accedi agli
						strumenti di creazione
					</p>
				</Col>
			</Row>
			<Row>
				<Col className='col-1'>
					<BsPeopleFill className='fs-5' />
				</Col>
				<Col className='col-10 ps-2'>
					<p className='fw-bold lh-2 mb-0' style={{ fontSize: '1rem' }}>
						La mia rete
					</p>
					<p style={{ fontSize: '0.8rem' }}>
						La mia reteLa mia rete Salva e gestisci i tuoi collegamenti e interessi.
					</p>
				</Col>
			</Row>
			<Row className=' mx-0 w-100 d-flex text-center border-top py-2'>
				<p className='mb-0 fw-bold text-secondary' style={{ fontSize: '0.9rem' }}>
					Mostra tutte le risorse (5) <BsArrowRight />{' '}
				</p>
			</Row>
		</Row>
	);
};

export default Resources;
