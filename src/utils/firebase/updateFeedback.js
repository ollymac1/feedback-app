import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { getAnalytics, logEvent } from 'firebase/analytics';
const analytics = getAnalytics();

const updateFeedback = async (id, updatedItem) => {
	try {
		//Set collection reference
		await setDoc(doc(db, 'feedback', id), updatedItem);

		console.log('🚀 Feedback successfully updated');
		logEvent(analytics, 'feedback_updated');
	} catch (error) {
		console.log('Could not update feedback', error);
	}
};

export default updateFeedback;
