import { useDispatch, useSelector } from 'react-redux';
import OneUser from '../oneUser';
import { ListGroup } from 'react-bootstrap';
import { changeModalAction } from '../../redux/action';

const ModalProfiles = () => {
	const dispatch = useDispatch();
	const profiles = useSelector(
		(state) => state.profile.profileData && state.profile.profileData[0]
	);
	const modal = useSelector((state) => state.profile.modal && state.profile.modal[0]);

	const toggleModal = () => {
		dispatch(changeModalAction(!modal));
	};

	return (
		modal && (
			<div className='modal'>
				<div className='overlay' onCanPlay={toggleModal}></div>
				<div className='modal-content bg-white'>
					<h2>hello</h2>{' '}
					<ListGroup>
						{profiles &&
							profiles.map((profile) => {
								return <OneUser user={profile} key={profile._id} />;
							})}
					</ListGroup>
					<button onClick={toggleModal} className='close-modal'>
						close
					</button>
				</div>
			</div>
		)
	);
};

export default ModalProfiles;
