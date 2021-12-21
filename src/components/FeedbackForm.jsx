import { useState, useContext, useEffect } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import RatingSelect from './RatingSelect';
import Button from './shared/Button';
import Card from './shared/Card';
import addFeedback from '../utils/firebase/addFeedback';
import updateFeedback from '../utils/firebase/updateFeedback';
import { Timestamp } from 'firebase/firestore';

function FeedbackForm() {
	const [text, setText] = useState('');
	const [rating, setRating] = useState(10);
	const [btnDisabled, setBtnDisabled] = useState(true);
	const [message, setMessage] = useState('');

	const { feedbackEdit, setLoading, setFeedbackEdit } =
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
		setLoading(true);
		if (!invalidTextLength) {
			const newFeedback = {
				text,
				rating,
				updatedAt: Timestamp.fromDate(new Date()),
			};

			if (feedbackEdit.edit) {
				updateFeedback(feedbackEdit.item.id, newFeedback);
				setFeedbackEdit({ item: {}, edit: false });
			} else {
				addFeedback(newFeedback);
			}
			setText('');
			setBtnDisabled(true);
		}
	};

	const handleKeypress = (e) => {
		console.log(e.keyCode);
		if (e.keyCode === 13) {
			handleSubmit();
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
						onKeyPress={handleKeypress}
					/>
					<Button isDisabled={btnDisabled} type='submit'>
						SUBMIT
					</Button>
				</div>
				{message && <div className='message'>{message}</div>}
			</form>
		</Card>
	);
}

export default FeedbackForm;
