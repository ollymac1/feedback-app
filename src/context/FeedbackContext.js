import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import feedbackData from '../data/FeedbackData';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
	const [feedback, setFeedback] = useState(feedbackData);
	const [feedbackEdit, setFeedbackEdit] = useState({
		item: {},
		edit: false,
	});

	// Delete Feedback
	const deleteFeedback = (id) => {
		if (window.confirm('Are you sure you want to delete this review?')) {
			setFeedback(feedback.filter((item) => item.id !== id));
		}
	};

	// Add Feedback item
	const addFeedback = (newFeedback) => {
		newFeedback.id = uuidv4();
		setFeedback([newFeedback, ...feedback]);
	};

	//Set Feedback item to be updated
	const editFeedback = (item) => {
		setFeedbackEdit({ item, edit: true });
	};

	//Update Feedback
	const updateFeedback = (id, updatedItem) => {
		setFeedback(
			feedback.map((item) =>
				item.id === id ? { ...item, ...updatedItem } : item
			)
		);
		setFeedbackEdit({ item: {}, edit: false });
	};

	return (
		<FeedbackContext.Provider
			value={{
				feedback,
				feedbackEdit, // Edit state with feedback item data
				deleteFeedback,
				addFeedback,
				editFeedback, // Edit feedback onlclick function
				updateFeedback,
			}}
		>
			{children}
		</FeedbackContext.Provider>
	);
};

export default FeedbackContext;
