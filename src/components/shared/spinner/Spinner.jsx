import Card from '../Card';
import './styles.css';

function Spinner() {
	const textStyle = {
		textAlign: 'center',
		fontSize: '.8rem',
	};

	return (
		<Card reverse>
			<div className='lds-ripple'>
				<div></div>
				<div></div>
			</div>
			<p style={textStyle}>LOADING</p>
		</Card>
	);
}

export default Spinner;
