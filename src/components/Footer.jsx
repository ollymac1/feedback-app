import fox from '../assets/img/secondaryFox.png';

const linkStyle = {
	opacity: '1',
};

const foxStyle = {
	height: '10px',
	padding: '0 5px',
};

function Footer() {
	return (
		<a href='https://www.brendanmccauley.dev' style={linkStyle}>
			<footer>
				<img style={foxStyle} src={fox} alt='' />
				<p>Brendan McCauley</p>
			</footer>
		</a>
	);
}

export default Footer;
