import { useState, useContext, useEffect } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import RatingSelect from './RatingSelect';
import Button from './shared/Button';
import Card from './shared/Card';

function FeedbackForm() {
	const [text, setText] = useState('');
	const [rating, setRating] = useState(10);
	const [btnDisabled, setBtnDisabled] = useState(true);
	const [message, setMessage] = useState('');

	const { addFeedback, feedbackEdit, updateFeedback } =
		useContext(FeedbackContext);

	const invalidTextLength = text.trim().length <= 10;

	useEffect(() => {
		if (feedbackEdit.edit === true) {
			setBtnDisabled(false);
			setText(feedbackEdit.item.text);
			setRating(feedbackEdit.item.rating);
		}
	}, [feedbackEdit]);

	const handleTextChange = (e) => {
		setText(e.target.value);

		if (text === '') {
			setBtnDisabled(true);
			setMessage(null);
		} else if (text !== '' && invalidTextLength) {
			setBtnDisabled(true);
			setMessage('Review needs to be a little longer...');
		} else {
			setMessage(null);
			setBtnDisabled(false);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!invalidTextLength) {
			const newFeedback = {
				text,
				rating,
			};

			if (feedbackEdit.edit) {
				updateFeedback(feedbackEdit.item.id, newFeedback);
			} else {
				addFeedback(newFeedback);
			}
			setText('');
			setBtnDisabled(true);
		}
	};

	return (
		<Card>
			<form onSubmit={handleSubmit}>
				<h2>Please rate your service.</h2>
				<RatingSelect select={(rating) => setRating(rating)} />
				<div className='input-group'>
					<textarea
						onChange={handleTextChange}
						type='text'
						placeholder='Please write a review'
						value={text}
						className='input'
					/>
					<Button isDisabled={btnDisabled} type='submit'>
						SEND
					</Button>
				</div>
				{message && <div className='message'>{message}</div>}
			</form>
		</Card>
	);
}

export default FeedbackForm;
