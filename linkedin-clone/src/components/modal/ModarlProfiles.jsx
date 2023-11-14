import { useDispatch, useSelector } from 'react-redux';
import OneUser from '../oneUser';
import { Button, ListGroup, Modal } from 'react-bootstrap';
import { changeModalAction } from '../../redux/action';

const ModalProfiles = () => {
	const dispatch = useDispatch();
	const modal = useSelector((state) => state.profile.modal && state.profile.modal[0]);
	const profiles = useSelector(
		(state) => state.profile.profileData && state.profile.profileData[0]
	);
	const handleClose = () => dispatch(changeModalAction(!modal));
	const handleShow = () => dispatch(changeModalAction(!modal));

	return (
		<>
			<Modal show={modal} onHide={handleClose} scrollable='true'>
				<Modal.Header closeButton>
					<Modal.Title>Persone che potresti conoscere</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<ListGroup>
						{profiles &&
							profiles.map((profile) => {
								return <OneUser user={profile} key={profile._id} />;
							})}
					</ListGroup>{' '}
				</Modal.Body>
				<Modal.Footer></Modal.Footer>
			</Modal>
		</>
	);
};

export default ModalProfiles;
