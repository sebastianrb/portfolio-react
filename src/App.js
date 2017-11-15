import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import projects from "./data/projects.json";
import Helmet from "react-helmet";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjectDescription from "./components/ProjectDescription";
import ProjectListSection from "./components/ProjectListSection";
import PortfolioDescription from "./components/PortfolioDescription";

import "./styles/normalize.css";
import "./styles/App.css";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			projects,
			selectedProject: ""
		};
	}

	componentWillMount() {}

	render() {
		console.log("project data: ", this.state.projects);
		console.log("Environemnt: ", process.env.NODE_ENV);
		return (
			<div className="app">
				<Helmet>
					<title>Sebastian | Front-end Portfolio</title>
					<link
						href="https://fonts.googleapis.com/css?family=Bad+Script|Roboto:100,300,400,500"
						rel="stylesheet"
					/>
				</Helmet>
				<div className="upper-content">
					<div className="header__overlay" />
					<Header />
					<PortfolioDescription projects={this.state.projects} />
				</div>
				<div className="main-content">
					<Switch>
						<Route
							exact
							path="/"
							render={props => {
								return <ProjectListSection {...props} projects={this.state.projects} />;
							}}
						/>
						<Route
							path="/project/:id"
							render={props => {
								return <ProjectDescription {...props} projects={this.state.projects} />;
							}}
						/>} />
						<Redirect to="/" />
					</Switch>
				</div>
				<Footer />
			</div>
		);
	}
}

export default App;
