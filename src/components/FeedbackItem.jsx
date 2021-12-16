import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import PropTypes from 'prop-types';
import Card from './shared/Card';
import { IoClose } from 'react-icons/io5';
import { FaEdit } from 'react-icons/fa';
import deleteFeedback from '../utils/firebase/deleteFeedback';

function FeedbackItem({ item }) {
	const { editFeedback, setLoading } = useContext(FeedbackContext);

	return (
		<Card reverse>
			<div className='num-display'>{item.rating}</div>
			<button
				className='close'
				onClick={() => {
					deleteFeedback(item.id);
					setLoading(true);
				}}
			>
				<IoClose color='white' />
			</button>
			<button onClick={() => editFeedback(item)} className='edit'>
				<FaEdit color='white' />
			</button>
			<div className='text-display'>{item.text}</div>
		</Card>
	);
}

FeedbackItem.propTypes = {
	item: PropTypes.object.isRequired,
};

export default FeedbackItem;
