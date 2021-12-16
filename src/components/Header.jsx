import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AboutIconLink from './AboutIconLink';

function Header({ text, bgColor, textColor, letterSpacing, textTransform }) {
	const headerStyes = {
		backgroundColor: bgColor,
		color: textColor,
		letterSpacing: letterSpacing,
		textTransform: textTransform,
	};

	const linkStyles = {
		color: textColor,
		textDecoration: 'none',
	};

	return (
		<header style={headerStyes}>
			<div className='container'>
				<Link to='/' style={linkStyles}>
					<h2>{text}</h2>
				</Link>
			</div>
			<AboutIconLink />
		</header>
	);
}

Header.defaultProps = {
	text: 'Customer Reviews',
	bgColor: 'rgba(0,0,0,0.4)',
	textColor: 'var(--primary-color)',
	letterSpacing: '1px',
	textTransform: 'uppercase',
};

Header.propTypes = {
	text: PropTypes.string.isRequired,
	bgColor: PropTypes.string.isRequired,
	letterSpacing: PropTypes.string.isRequired,
	textTransform: PropTypes.string.isRequired,
};

export default Header;
