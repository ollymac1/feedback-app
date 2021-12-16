import { Link } from 'react-router-dom';
import Card from '../components/shared/Card';

function AboutPage() {
	return (
		<Card>
			<div className='about'>
				<h1>This is a project</h1>
				<p>This is a React App</p>
				<p>Code</p>
				<a href='/'>brendanmccauley.dev</a>
				<Link to='/'>
					<p>Back to home</p>
				</Link>
			</div>
		</Card>
	);
}

export default AboutPage;
