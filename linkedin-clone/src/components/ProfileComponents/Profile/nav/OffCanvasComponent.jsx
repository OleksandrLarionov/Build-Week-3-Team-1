import { Col, Row, Offcanvas } from 'react-bootstrap';
import { PiVideoFill } from 'react-icons/pi';
import { FaCompass } from 'react-icons/fa';
import { FaMoneyBillTrendUp } from 'react-icons/fa6';
import { FcAdvertising, FcTemplate, FcCollaboration, FcBarChart } from 'react-icons/fc';
import { useState } from 'react';
import { BsPlus } from 'react-icons/bs';
import { BsFillGrid3X3GapFill } from 'react-icons/bs';

import { MdArrowDropDown } from 'react-icons/md';
const OffCanvasComponent = () => {
	const [showOffcanvas, setShowOffcanvas] = useState(false);
	const toggleOffcanvas = () => {
		setShowOffcanvas(!showOffcanvas);
	};

	return (
		<>
			<div className='d-flex justify-content-end mt-3'>
				<div className='text-center smallTwo ' onClick={toggleOffcanvas}>
					<BsFillGrid3X3GapFill className='fs-4 text-secondary black' />
					<p>
						Per le aziende
						<MdArrowDropDown />
					</p>
				</div>
			</div>
			<Offcanvas placement='end' show={showOffcanvas} onHide={() => setShowOffcanvas(false)}>
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
							<h6 className='text-start mt-2 fw-bold ps-4'>Scopri altro per il business</h6>
						</div>
						<div className=' ps-4 pt-2'>
							<div className='fw-bold'>
								<div>
									<p className='lh-1 mb-1' style={{ fontSize: '0.9rem' }}>
										{' '}
										Assumi su LinkedIn
									</p>
									<p className='fw-normal lh-1' style={{ fontSize: '0.8rem' }}>
										Trova, attrai e assumi
									</p>
								</div>
								<div>
									<p className='lh-1 mb-1' style={{ fontSize: '0.9rem' }}>
										Vendi con LinkedIn
									</p>
									<p className='fw-normal lh-1' style={{ fontSize: '0.8rem' }}>
										Costruisci relazioni con i buyer
									</p>
								</div>
								<div>
									<p className='lh-1 mb-1' style={{ fontSize: '0.9rem' }}>
										Offerta di lavoro gratuita
									</p>
									<p className='fw-normal lh-1' style={{ fontSize: '0.8rem' }}>
										{' '}
										Trova candidati di qualità
									</p>
								</div>
								<div>
									<p className='lh-1 mb-1' style={{ fontSize: '0.9rem' }}>
										Fai pubblicità su LinkedIn
									</p>
									<p className='fw-normal lh-1' style={{ fontSize: '0.8rem' }}>
										Acquisisci clienti e fai crescere la tua azienda
									</p>
								</div>
								<div>
									<p className='lh-1 mb-1' style={{ fontSize: '0.9rem' }}>
										Impara con LinkedIn
									</p>
									<p className='fw-normal lh-1' style={{ fontSize: '0.8rem' }}>
										{' '}
										Corsi per formare i tuoi dipendenti
									</p>
								</div>
								<div>
									<p className='lh-1 mb-1' style={{ fontSize: '0.9rem' }}>
										Centro amministrazione
									</p>
									<p className='fw-normal lh-1' style={{ fontSize: '0.8rem' }}>
										Gestisci i dettagli di fatturazione e account
									</p>
								</div>
							</div>
						</div>
					</Row>
					<Row className='border border-top-0 rounded-bottom mx-2 ps-4'>
						<p className='lh-1 mb-1 fw-bold py-2' style={{ fontSize: '0.9rem' }}>
							Crea una pagina aziendale <BsPlus className='fs-4' />
						</p>
					</Row>
				</Offcanvas.Body>
			</Offcanvas>
		</>
	);
};

export default OffCanvasComponent;
