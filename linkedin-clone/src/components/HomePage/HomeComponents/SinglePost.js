import { Card, Row, Col } from 'react-bootstrap';
import scimmia from '../../../scimmia.jpg';
import procione from '../../../procione.jpeg';
import { format } from 'date-fns';
import { it } from 'date-fns/locale';
import { BiLike } from 'react-icons/bi';
import { MdMessage } from 'react-icons/md';
import { GrPowerCycle } from 'react-icons/gr';
import { IoIosSend } from 'react-icons/io';
import AddComment from '../HomeComponents/AddComment';
import { useState } from 'react';
const SinglePost = ({ data }) => {
	const [showComment, setShowComment] = useState(false);
	return (
		<Col className='col-12 elements mb-4' key={data._id}>
			<Card className='mb-2 border-0'>
				<Row className='p-3 '>
					<Col xs={2} className='ps-2 pe-0 text-center'>
						{' '}
						<img
							src={data.user.image ? `${data.user.image}` : `${scimmia}`}
							alt='profile'
							style={{
								height: '45px',
								width: '45px',
								borderRadius: '25px',
							}}
						/>
					</Col>
					<Col xs={10} className='ps-1'>
						<p className='fw-bold mb-0 ' style={{ fontSize: '1rem' }}>
							{data.user.name ? `${data.user.name}` : `${data.user.username}`}{' '}
							{data.user.surname ? `${data.user.surname}` : ``}
						</p>
						<p className='text-secondary lh-1 mb-1' style={{ fontSize: '0.8rem' }}>
							{data.user.title ? `${data.user.title}` : `Developer`}
						</p>
						<p className='text-secondary lh-1 mb-0' style={{ fontSize: '0.7rem' }}>
							{format(new Date(data.createdAt), 'dd MMMM yyyy- HH:mm', {
								locale: it,
							})}
						</p>
					</Col>
				</Row>

				<Card.Body>
					<Card.Text>{data.text}</Card.Text>
					<Card.Img
						className='image-fluid'
						src={data.image ? `${data.image}` : `${procione}`}
						alt=''
					/>
				</Card.Body>
			</Card>
			<Col>
				<Row className='text-center border-top p-2 align-items-center'>
					<Col className='iconN d-flex  pt-2 hoverDiv'>
						<BiLike className='fs-4' />
						<p style={{ fontSize: '0.9rem' }} className='ps-1'>
							Consiglia
						</p>
					</Col>
					<Col
						className='iconN d-flex pt-2 hoverDiv'
						onClick={() => {
							setShowComment(!showComment);
						}}
						style={{ cursor: 'pointer' }}>
						<MdMessage className='fs-4' />
						<p style={{ fontSize: '0.9rem' }} className='ps-1'>
							Commenta
						</p>
					</Col>

					<Col className='iconN d-flex pt-2 hoverDiv'>
						<GrPowerCycle className='fs-4' />
						<p style={{ fontSize: '0.9rem' }} className='ps-1'>
							Diffondi
						</p>
					</Col>
					<Col className='iconN d-flex pt-2 hoverDiv'>
						<IoIosSend className='fs-4' />
						<p style={{ fontSize: '0.9rem' }} className='ps-1'>
							Invia
						</p>
					</Col>
				</Row>
				{showComment && <AddComment idPost={data._id} />}
			</Col>
		</Col>
	);
};

export default SinglePost;
