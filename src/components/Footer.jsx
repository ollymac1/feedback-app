import fox from '../assets/img/fox.png';

const linkStyle = {
	display: 'flex',
};

const foxStyle = {
	height: '10px',
	margin: 'auto',
	padding: '0 5px',
};

function Footer() {
	return (
		<footer>
			<a href='https://www.brendanmccauley.dev' style={linkStyle}>
				Brendan McCauley <img style={foxStyle} src={fox} alt='' />{' '}
				{new Date().getFullYear()}
			</a>
		</footer>
	);
}

export default Footer;
