import PropTypes from 'prop-types';

function Header({ text, bgColor, textColor, letterSpacing, textTransform }) {
	const headerStyes = {
		backgroundColor: bgColor,
		color: textColor,
		letterSpacing: letterSpacing,
		textTransform: textTransform,
	};

	return (
		<header style={headerStyes}>
			<div className='container'>
				<h2>{text}</h2>
			</div>
		</header>
	);
}

Header.defaultProps = {
	text: 'Customer Reviews',
	bgColor: 'rgba(0,0,0,0.4)',
	textColor: '#ed7966',
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
