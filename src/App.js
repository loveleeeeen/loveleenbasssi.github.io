import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/index';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages';
import About from './Pages/about';
import Events from './Pages/events';
import AnnualReport from './Pages/annual';
import Teams from './Pages/team';
import Blogs from './Pages/blogs';
import SignUp from './Pages/signup';

function App() {
return (
	<Router>
	<Navbar />
	<Switch>
		<Route path='/' exact component={Home} />
		<Route path='/about' component={About} />
		<Route path='/events' component={Events} />
		<Route path='/annual' component={AnnualReport} />
		<Route path='/team' component={Teams} />
		<Route path='/blogs' component={Blogs} />
		<Route path='/sign-up' component={SignUp} />
	</Switch>
	</Router>
);
}

export default App;
