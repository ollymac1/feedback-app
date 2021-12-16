import { Link } from 'react-router-dom';
import Card from '../components/shared/Card';
import { AiFillGithub } from 'react-icons/ai';
import { MdOutlineRateReview } from 'react-icons/md';
import { GoHome } from 'react-icons/go';

function AboutPage() {
	return (
		<Card>
			<div className='about'>
				<h1>This is a project</h1>
				<p>
					A simple customer review CRUD app with ⚛️ React.js and 🔥 Firebase v9.
				</p>
				<a
					className='about-section'
					target='_blank'
					href='https://github.com/ollymac1/feedback-app'
					rel='noreferrer'
				>
					<AiFillGithub />

					<p>View code on GitHub</p>
				</a>
				<a
					className='about-section'
					target='_blank'
					href='https://www.brendanmccauley.dev'
					rel='noreferrer'
				>
					<GoHome />
					<p>BrendanMcCauley.dev</p>
				</a>
				<Link className='about-section' to='/'>
					<MdOutlineRateReview />
					<p>Back to Reviews</p>
				</Link>
			</div>
		</Card>
	);
}

export default AboutPage;
