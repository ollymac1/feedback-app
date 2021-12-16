import { createContext, useState, useEffect } from 'react';
import getFeedback from '../utils/firebase/getFeedback';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
	const [feedback, setFeedback] = useState([]);
	const [loading, setLoading] = useState(true);
	const [feedbackEdit, setFeedbackEdit] = useState({
		item: {},
		edit: false,
	});

	useEffect(() => {
		async function fetchData() {
			const feedback = await getFeedback();
			setFeedback(feedback);
			setLoading(false);
		}

		fetchData();
	}, [loading]);

	//Set Feedback item to be updated
	const editFeedback = (item) => {
		setFeedbackEdit({ item, edit: true });
	};

	return (
		<FeedbackContext.Provider
			value={{
				feedback,
				feedbackEdit, // Edit state with feedback item data
				loading,
				setLoading,
				editFeedback, // Edit feedback onlclick function
				setFeedbackEdit,
			}}
		>
			{children}
		</FeedbackContext.Provider>
	);
};

export default FeedbackContext;
