import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { getAnalytics, logEvent } from 'firebase/analytics';
const analytics = getAnalytics();

const addFeedback = async (newFeedback) => {
	try {
		//Set collection reference
		await addDoc(collection(db, 'feedback'), newFeedback);

		console.log('🚀 Feedback successfully added');
		logEvent(analytics, 'feedback_added');
	} catch (error) {
		console.log('Could not add feedback', error);
	}
};

export default addFeedback;
