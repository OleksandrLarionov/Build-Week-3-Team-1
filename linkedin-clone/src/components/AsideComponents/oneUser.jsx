import { Button } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import { BsPersonAdd } from 'react-icons/bs';

const OneUser = ({ user }) => {
	return (
		<ListGroup.Item className='border-0 ps-1'>
			<div className='d-flex mb-3'>
				<div>
					<div className='me-2'>
						<img src={user.image} alt='user.username' className='rounded-pill' width={40} />
					</div>
				</div>
				<div className='lh-1 flex-column'>
					<div>
						<p className='fw-bold mb-1'>
							{user.name} {user.surname}
						</p>
						<p className='lh-1'>{user.title}</p>
					</div>
					<div>
						<div >
							<Button
								variant='light'
								className='text-secondary bg-white border border-black rounded-pill px-3'
								onClick={(e) => {
									e.preventDefault();
								}}>
								<BsPersonAdd className='me-1' />
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
