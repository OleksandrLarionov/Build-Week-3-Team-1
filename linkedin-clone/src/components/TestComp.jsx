import { useDispatch, useSelector } from 'react-redux';
import { getAllProfilesDataAction, getUserDataAction, modifyUserAction } from '../redux/action';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { key } from '../redux/action';

const TestComp = () => {
	const prevviuousDataUser = useSelector((state) => state.user.userData && state.user.userData[0]);
	const [dataUser, setDataUser] = useState({
		name: '',
		surname: '',
		email: '',
		username: '',
		bio: '',
		title: '',
		area: '',
	});

	const [formImg, setFormImg] = useState(null);

	useEffect(() => {
		if (prevviuousDataUser) {
			setDataUser({
				name: prevviuousDataUser.name,
				surname: prevviuousDataUser.surname,
				email: prevviuousDataUser.email,
				username: prevviuousDataUser.username,
				bio: prevviuousDataUser.bio,
				title: prevviuousDataUser.title,
				area: prevviuousDataUser.area,
			});
		}
	}, [prevviuousDataUser]);
	useEffect(() => {
		dispatch(getUserDataAction());
		dispatch(getAllProfilesDataAction());
	}, []);
	const dispatch = useDispatch();
	const handreSubmit = async (e) => {
		e.preventDefault();
		dispatch(modifyUserAction(dataUser));
	};

	return (
		<Container>
			<Form onSubmit={handreSubmit}>
				<Form.Group md='12'>
					<Form.Control
						required
						type='text'
						placeholder='name'
						value={dataUser.name}
						onChange={(e) => {
							e.preventDefault();
							setDataUser({ ...dataUser, name: e.target.value });
						}}
					/>
				</Form.Group>
				<Form.Group md='12'>
					<Form.Control
						required
						type='text'
						placeholder='surname'
						value={dataUser.surname}
						onChange={(e) => {
							e.preventDefault();
							setDataUser({ ...dataUser, surname: e.target.value });
						}}
					/>
				</Form.Group>
				<Form.Group md='12'>
					<Form.Control
						required
						type='email'
						placeholder='email'
						value={dataUser.email}
						onChange={(e) => {
							e.preventDefault();
							setDataUser({ ...dataUser, email: e.target.value });
						}}
					/>
				</Form.Group>
				<Form.Group md='12'>
					<Form.Control
						required
						type='text'
						placeholder='username'
						value={dataUser.username}
						onChange={(e) => {
							e.preventDefault();
							setDataUser({ ...dataUser, username: e.target.value });
						}}
					/>
				</Form.Group>
				<Form.Group md='12'>
					<Form.Control
						required
						as='textarea'
						rows={3}
						placeholder='bio'
						value={dataUser.bio}
						onChange={(e) => {
							e.preventDefault();
							setDataUser({ ...dataUser, bio: e.target.value });
						}}
					/>
				</Form.Group>
				<Form.Group md='12'>
					<Form.Control
						required
						type='text'
						placeholder='title'
						value={dataUser.title}
						onChange={(e) => {
							e.preventDefault();
							setDataUser({ ...dataUser, title: e.target.value });
						}}
					/>
				</Form.Group>

				<Form.Group md='12'>
					<Form.Control
						required
						type='text'
						placeholder='area'
						value={dataUser.area}
						onChange={(e) => {
							e.preventDefault();
							setDataUser({ ...dataUser, area: e.target.value });
						}}
					/>
				</Form.Group>
				{/* <Form.Group md='12'>
					<Form.Control
						type='text'
						placeholder='imgUrl'
						value={dataUser.image}
						onChange={(e) => {
							e.preventDefault();
							setDataUser({ ...dataUser, image: e.target.value });
						}}
					/>
				</Form.Group> */}
				<Form.Group className='mb-3'>
					<Form.Control
						type='file'
						onChange={(e) => {
							const file = e.target.files[0];
							if (file) {
								const formData = new FormData();
								formData.append('profile', file);
								setFormImg(formData);
							}
						}}
					/>
				</Form.Group>
				<Button
					type='submit'
					onClick={async () => {
						const id = '6551e7bbc55e7e0018f83bfb';
						const userApiList = `https://striveschool-api.herokuapp.com/api/profile/${id}/picture`;

						try {
							const imageData = await fetch(userApiList, {
								method: 'POST',
								body: formImg,
								headers: {
									Authorization: key,
								},
							});
						} catch (error) {
							console.log('Errore', error);
						}
					}}>
					Sub
				</Button>
			</Form>
		</Container>
	);
};

export default TestComp;
