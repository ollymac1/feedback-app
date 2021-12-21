import { useContext } from 'react';
import { Fade } from 'react-awesome-reveal';
import { motion, AnimatePresence } from 'framer-motion';
import FeedbackContext from '../context/FeedbackContext';
import FeedbackItem from './FeedbackItem';
import Spinner from './shared/spinner/Spinner';

function FeedbackList() {
	let { feedback, loading } = useContext(FeedbackContext);

	feedback = feedback.sort((a, b) => b.updatedAt - a.updatedAt);

	if (loading) {
		return <Spinner />;
	}

	if (!feedback || feedback.length === 0) {
		return <p>No Feedback Submitted</p>;
	}
	return (
		<div className='feedback-list'>
			<AnimatePresence>
				{feedback.map((item) => (
					<Fade
						cascade={true}
						damping={1}
						triggerOnce
						delay={300}
						key={item.id}
					>
						<motion.div
							animate={{ opacity: 0.8 }}
							exit={{ opacity: 0 }}
							whileHover={{ scale: 1.01, opacity: 1 }}
						>
							<FeedbackItem key={item.id} item={item} />
						</motion.div>
					</Fade>
				))}
			</AnimatePresence>
		</div>
	);
}

export default FeedbackList;
