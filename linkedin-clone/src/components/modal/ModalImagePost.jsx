import { Form } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { getImageAction } from '../../redux/action/post';
const ModalImagePost = (props) => {
	const dispatch = useDispatch();
	return (
		<Modal
			{...props}
			size='lg'
			aria-labelledby='contained-modal-title-vcenter'
			centered
			scrollable='true'>
			<Modal.Header closeButton>
				<Modal.Title id='contained-modal-title-vcenter'>Editor</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Form.Group className='mb-3'>
						<Form.Label>Seleziona il contenuto multimediale</Form.Label>
						<Form.Control
							type='file'
							onChange={(e) => {
								const file = e.target.files[0];
								if (file) {
									const formData = new FormData();
									formData.append('post', file);
									dispatch(getImageAction(formData));
								}
							}}
						/>
					</Form.Group>
				</Form>
			</Modal.Body>
			<Modal.Footer></Modal.Footer>
		</Modal>
	);
};

export default ModalImagePost;
