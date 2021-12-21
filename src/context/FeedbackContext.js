import { collection, onSnapshot } from '@firebase/firestore';
import { db } from '../config/firebase';
import { createContext, useState, useEffect } from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
	const [feedback, setFeedback] = useState([]);
	const [loading, setLoading] = useState(true);
	const [feedbackEdit, setFeedbackEdit] = useState({
		item: {},
		edit: false,
	});

	useEffect(
		() =>
			onSnapshot(collection(db, 'feedback'), (snapshot) => {
				setLoading(true);
				const data = [];
				snapshot.docs.map((item) =>
					data.push({
						id: item.id,
						rating: item.data().rating,
						text: item.data().text,
					})
				);
				console.log('Feedback Array: ', data);
				setFeedback(data);
				setLoading(false);
			}),
		[]
	);

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
