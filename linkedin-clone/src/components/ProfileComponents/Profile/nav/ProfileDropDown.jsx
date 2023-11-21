import { Button, NavLink, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProfileDropDown = () => {
	const user = useSelector((state) => state.user.userData[0]);
	return (
		<NavDropdown title='tu' id='navbarScrollingDropdown' className='dropstart goingDown'>
			<NavDropdown.Item>
				<div className='d-flex align-items-center'>
					<p className='fs-1 me-2'>
						<img
							src={user?.image}
							alt='profileImage'
							className='rounded-pill border'
							width={55}
							height={55}
						/>
					</p>
					<div className='d-flex flex-column'>
						<p
							className='d-flex lh-1 align-items-center fw-bold'
							style={{ fontSize: '1.2rem' }}>
							{`${user?.name} ${user?.surname}`}
						</p>
						<p className='lh-1'>{user?.title}</p>
					</div>
				</div>
			</NavDropdown.Item>

			{/* questo elemento crea il problema di annidamento */}
			<div className='dropdown-item'>
				<Link to='/MyProfile' className='text-decoration-none '>
					<Button
						className='d-flex justify-content-center align-items-center rounded-pill w-100 px-auto'
						variant='outline-primary'
						style={{ height: '25px' }}>
						Visualizza profilo
					</Button>
				</Link>
			</div>
			{/* fine dropDown */}
			<a
				className='ms-4 nav-link'
				href='https://premium.linkedin.com/'
				target='_blank'
				id='link'
				rel='noopener noreferrer'>
				Vai a LinkedIn Premium
			</a>

			<NavDropdown.Item>
				<div className='p-1 nav-link' style={{ fontSize: '0.9rem' }}>
					<p className='lh-1 mb-0'>Impostazione e privacy</p>
				</div>
				<div className='p-1 nav-link' style={{ fontSize: '0.9rem' }}>
					<p className='lh-1 mb-0'>Guida</p>
				</div>
				<div className='p-1 border-bottom nav-link' style={{ fontSize: '0.9rem' }}>
					<p className='lh-1 mb-2'> Lingua</p>
				</div>
				<h6 className='pt-3 fw-bold' style={{ fontSize: '0.9rem' }}>
					Gestisci
				</h6>
				<div className='p-1 nav-link' style={{ fontSize: '0.9rem' }}>
					<p className='lh-1 mb-0'>Post è attività</p>
				</div>
				<div className='p-1 nav-link' style={{ fontSize: '0.9rem' }}>
					<p className='lh-1 mb-2'>
						Account per la pubblicazione di
						<br /> offerte di lavoro
					</p>
				</div>
			</NavDropdown.Item>

			<NavDropdown.Item>
				<div
					onClick={() => {
						localStorage.removeItem('personalkey');
						localStorage.removeItem('personalUserID');
						window.location.assign('/');
					}}
					className='fw-bold border-top pt-2 nav-link'>
					Esci
				</div>
			</NavDropdown.Item>
		</NavDropdown>
	);
};

export default ProfileDropDown;
