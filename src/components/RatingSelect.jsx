import { useState, useContext, useEffect } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function RatingSelect({ select }) {
	const [selected, setSelected] = useState(5);

	const { feedbackEdit } = useContext(FeedbackContext);

	useEffect(() => {
		feedbackEdit.edit && setSelected(feedbackEdit.item.rating);
	}, [feedbackEdit]);

	const handleChange = (e) => {
		setSelected(+e.currentTarget.value);
		select(+e.currentTarget.value);
	};

	const maxRating = 5; // Maximum rating a user can select

	return (
		<ul className='rating'>
			{[...Array(maxRating)].map((item, index) => (
				<li key={index}>
					<input
						type='radio'
						id={`num${index + 1}`}
						name='rating'
						value={index + 1}
						onChange={handleChange}
						checked={selected === index + 1}
					/>
					<label htmlFor={`num${index + 1}`}>{index + 1}</label>
				</li>
			))}
		</ul>
	);
}

export default RatingSelect;
