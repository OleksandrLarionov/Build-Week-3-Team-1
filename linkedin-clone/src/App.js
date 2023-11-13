import './App.css';
import Aside from './components/Aside';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import TestComp from './components/TestComp';
function App() {
	return (
		<div>
			<Aside />
			<Footer />
			<TestComp />
		</div>
	);
}

export default App;
