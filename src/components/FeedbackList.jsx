import { useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FeedbackContext from '../context/FeedbackContext';
import FeedbackItem from './FeedbackItem';
import Spinner from './shared/spinner/Spinner';

function FeedbackList() {
	const { feedback, loading } = useContext(FeedbackContext);

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
					<motion.div
						key={item.id}
						initial={{ opacity: 0 }}
						animate={{ opacity: 0.9 }}
						exit={{ opacity: 0 }}
						whileHover={{ scale: 1.01, opacity: 1 }}
					>
						<FeedbackItem key={item.id} item={item} />
					</motion.div>
				))}
			</AnimatePresence>
		</div>
	);
}

export default FeedbackList;
