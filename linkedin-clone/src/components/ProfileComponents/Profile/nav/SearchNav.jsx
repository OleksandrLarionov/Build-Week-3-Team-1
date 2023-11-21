import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { handleSubmitAction } from '../../../../redux/action';
import { Form } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const SearchNav = () => {
	const [query, setQuery] = useState('');
	const dispatch = useDispatch();
	const location = useLocation();

	const handleChange = (e) => {
		setQuery(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(handleSubmitAction(query));
		location.href = 'localhost:3000/Jobs';
	};
	return (
		<div className='d-flex justify-content-center align-items-center'>
			<Form style={{ width: '99%' }} className='me-5 smallOne' onSubmit={handleSubmit}>
				<Link to='/jobs' className='text-decoration-none'>
					<Form.Control
						type='search'
						placeholder='Cerca'
						className='me-4 ms-1 ps-3'
						aria-label='Search'
						id='color-placeholder'
						value={query}
						onChange={handleChange}
					/>
				</Link>
			</Form>
		</div>
	);
};

export default SearchNav;
