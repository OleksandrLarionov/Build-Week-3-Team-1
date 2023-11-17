import { useEffect } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { BsArrowRight } from 'react-icons/bs';
import { ImPencil } from 'react-icons/im';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useParams } from 'react-router-dom';
import { fetchPostsAction } from '../../../redux/action/post';
import { format } from 'date-fns';
import { it } from 'date-fns/locale';
import scimmia from '../../../../src/scimmia.jpg';

const Activities = () => {
	const user = useSelector((state) => state.user.userData);
	const params = useParams();
	const dispatch = useDispatch();
	const allPost = useSelector((state) => state.post.posts && state.post.posts);
	const singleUserPosts = allPost.filter((post) => post.user._id === params.userId).reverse();
	console.log(singleUserPosts);
	useEffect(() => {
		const userId = params.userId;
		if (userId) dispatch(fetchPostsAction());
	}, [params.userId]);
	return (
		<Row className='elements mb-1 justify-content-center'>
			<Row className='mx-0'>
				<Col className='col-4'>
					<p className='fw-bold fs-5 pt-3 mb-0'>Attività</p>
					<p className='text-primary fw-bold' style={{ fontSize: '0.8rem' }}>
						45 follower
					</p>{' '}
				</Col>
				<Col className='col-8 mt-3 text-end'>
					<Button
						variant='outline-primary'
						className='rounded-pill fw-bold lh-1 me-2'
						style={{ width: '130px', fontSize: '0.9rem' }}>
						Crea un post
					</Button>{' '}
					<ImPencil className='text-secondary' />
				</Col>
				<Row className='justify-content-center mx-0 '>
					{singleUserPosts &&
						singleUserPosts.map((post) => {
							return (
								<Col key={post._id} xs={12} className='border p-1 mb-2'>
									<p className='mb-0 text-secondary' style={{ fontSize: '0.8rem' }}>
										<span className='fw-bold'> {post.user.name}</span> ha pubblicato
										questo post
										{}
									</p>
									<p style={{ fontSize: '0.8rem' }} className='text-secondary'>
										{format(new Date(post.createdAt), 'dd MMMM yyyy - HH:mm', {
											locale: it,
										})}
									</p>{' '}
									
									<Row>
										<Col className='col-5'>
											<img
												src={post.image ? post.image : scimmia}
												alt='post'
												className='mb-2 rounded img-fluid'
											/>
										</Col>
										<Col className='col-7'>
											<p className='pt-2 mb-0'>{post.text} </p>
											<p
												className='mb-0 text-secondary lh-1'
												style={{ fontSize: '0.7rem' }}>
												1 minuto di lettura
											</p>
										</Col>
									</Row>
								</Col>
							);
						})}
				</Row>
			</Row>
			<Row className=' mx-0 w-100 d-flex text-center border-top py-2'>
				<p className='mb-0 fw-bold text-secondary' style={{ fontSize: '0.9rem' }}>
					Mostra tutti i post <BsArrowRight />{' '}
				</p>
			</Row>
		</Row>
	);
};

export default Activities;
