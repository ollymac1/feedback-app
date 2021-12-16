import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../../config/firebase';

const getFeedback = async () => {
	const feedback = [];

	try {
		// Get Collection Reference
		const feedbackRef = collection(db, 'feedback');

		//Create Query
		const q = query(feedbackRef, orderBy('updatedAt', 'desc'));

		//Execute query
		const querySnapshot = await getDocs(q);

		querySnapshot.forEach((doc) => {
			feedback.push({
				id: doc.id,
				rating: doc.data().rating,
				text: doc.data().text,
			});
		});
		return feedback;
	} catch (error) {
		console.log('Could not fetch feedback');
	}
};

export default getFeedback;
