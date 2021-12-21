import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import PropTypes from 'prop-types';
import Card from './shared/Card';
import { MdOutlineDeleteForever } from 'react-icons/md';

import { VscEdit } from 'react-icons/vsc';

import deleteFeedback from '../utils/firebase/deleteFeedback';

const scroll = () => window.scrollTo({ top: 0, behavior: 'smooth' });

function FeedbackItem({ item }) {
	const { editFeedback } = useContext(FeedbackContext);

	const handleUpdate = () => {
		scroll();
		editFeedback(item);
	};

	return (
		<Card reverse>
			<div className='num-display'>{item.rating}</div>
			<button
				className='close'
				onClick={() => {
					deleteFeedback(item.id);
				}}
			>
				<MdOutlineDeleteForever />
			</button>
			<button onClick={handleUpdate} className='edit'>
				<VscEdit />
			</button>
			<div className='text-display'>{item.text}</div>
		</Card>
	);
}

FeedbackItem.propTypes = {
	item: PropTypes.object.isRequired,
};

export default FeedbackItem;
