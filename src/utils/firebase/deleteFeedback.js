import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '../../config/firebase';

const deleteFeedback = async (id) => {
	if (window.confirm('Are you sure you want to delete this review?')) {
		try {
			// Delete Document by ID
			await deleteDoc(doc(db, 'feedback', id));

			console.log('🚀 Feedback successfully deleted');
		} catch (error) {
			console.log('Could not delete feedback');
		}
	}
};

export default deleteFeedback;
