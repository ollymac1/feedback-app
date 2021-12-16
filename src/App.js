import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FeedbackProvider } from './context/FeedbackContext';
import FeedbackList from './components/FeedbackList';
import Header from './components/Header';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage';
import Footer from './components/Footer';

function App() {
	return (
		<FeedbackProvider>
			<Router>
				<Header />
				<div className='container'>
					<Routes>
						<Route
							exact
							path='/'
							element={
								<>
									<FeedbackForm />
									<FeedbackStats />
									<FeedbackList />
								</>
							}
						></Route>
						<Route path='/about' element={<AboutPage />} />
					</Routes>
				</div>
				<Footer />
			</Router>
		</FeedbackProvider>
	);
}

export default App;
