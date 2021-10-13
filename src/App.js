import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CoursesList from './components/CoursesList';
import CourseDetail from './components/CourseDetail';
import Home from './components/Home';

function App() {
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/courses" component={CoursesList} />
					<Route path="/courses/:id" component={CourseDetail} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
