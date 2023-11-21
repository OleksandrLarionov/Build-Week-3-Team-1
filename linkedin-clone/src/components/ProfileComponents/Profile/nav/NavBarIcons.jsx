import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { HiMiniUsers } from 'react-icons/hi2';
import { PiHandbagSimpleFill } from 'react-icons/pi';
import { AiFillHome, AiFillMessage } from 'react-icons/ai';
import { BsFillBellFill } from 'react-icons/bs';
import ProfileDrowpDown from './ProfileDropDown';

const NavBarIcons = () => {
	const location = useLocation();
	const user = useSelector((state) => state.user.userData);

	return (
		<div
			className='d-flex justify-content-around align-items-center border-end listSmall'
			style={{ height: '50px' }}>
			<div className='d-flex flex-column '>
				<Link
					className={location.pathname === '/Home' ? 'nav-link active' : 'nav-link'}
					to='/Home'>
					<p className='text-center mb-0 '>
						<AiFillHome className='fs-4 text-secondary black' />
					</p>
					<p className='m-0'>Home</p>
				</Link>
			</div>

			<div className='d-flex flex-column '>
				<Link
					href='#'
					className={location.pathname === '/ret' ? 'nav-link active' : 'nav-link'}>
					<p className='text-center mb-0 py-0 '>
						<HiMiniUsers className='fs-4 text-secondary black' />
						<br />
						Rete
					</p>
				</Link>
			</div>

			<div className='d-flex flex-column  ms-2 '>
				<Link
					className={location.pathname === '/Jobs' ? 'nav-link active' : 'nav-link'}
					to='/Jobs'>
					<p className='text-center mb-0 py-0 '>
						<PiHandbagSimpleFill className='fs-4 text-secondary black' />
						<br />
						Lavoro
					</p>
				</Link>
			</div>

			<div className='d-flex flex-column  ms-2 '>
				<Link
					href='#'
					className={location.pathname === '/messagistica' ? 'nav-link active' : 'nav-link'}>
					<p className='text-center mb-0 py-0 '>
						<AiFillMessage className='fs-4 text-secondary black' />
						<br />
						Messaggistica
					</p>
				</Link>
			</div>

			<div>
				<Link href='#' className='nav-link'>
					<p className='text-center mb-0 py-0'>
						<BsFillBellFill className='fs-4 text-secondary black' />
						<br />
						Notifiche
					</p>
				</Link>
			</div>

			<div
				className={
					location.pathname === '/MyProfile' ? 'py-0 nav-link active' : 'py-0 nav-link'
				}>
				<div className='d-flex flex-column align-items-center justify-content-center me-2'>
					<img
						src={user[0]?.image}
						alt='profileImage moreBig '
						className='rounded-pill goingDown2'
						id='moreBig'
						width={25}
						height={25}
					/>
					<ProfileDrowpDown />
				</div>
			</div>
		</div>
	);
};

export default NavBarIcons;
