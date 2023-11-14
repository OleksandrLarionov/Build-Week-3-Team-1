import { Button } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import { BsPersonAdd } from 'react-icons/bs';

const OneUser = ({ user }) => {
	return (
		<ListGroup.Item className='border-0'>
			<div className='d-flex'>
				<div>
					<div className='me-2'>
						<img src={user.image} alt='user.username' className='rounded-pill' width={40} />
					</div>
				</div>
				<div className='lh-1 flex-column'>
					<div>
						<p className='fw-bold'>
							{user.name} {user.surname}
						</p>
						<p>{user.title}</p>
					</div>
					<div>
						<div className=' py-2'>
							<Button
								variant='light'
								className='text-secondary bg-white border border-black rounded-pill px-3'
								onClick={(e) => {
									e.preventDefault();
								}}>
								<BsPersonAdd className='me-2' />
								Collegati
							</Button>
						</div>
					</div>
				</div>
			</div>
		</ListGroup.Item>
	);
};

export default OneUser;
