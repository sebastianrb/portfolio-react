import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import projects from "./data/projects.json";
import classnames from "classnames";
import Test from "./components/Header";
import Project from "./components/Project";

class App extends Component {
	componentWillMount() {}

	render() {
		console.log("project data: ", projects);
		console.log("Environemnt: ", process.env.NODE_ENV);
		return (
			<div className="app">
				<h3>Header</h3>
				<div className="main-content">
					<Switch>
						<Route exact path="/" component={Test} />
						<Route path="/project/:id" component={Project} />
						<Redirect to="/" />
					</Switch>
				</div>
				<h3>This is the footer</h3>
			</div>
		);
	}
}

export default App;
