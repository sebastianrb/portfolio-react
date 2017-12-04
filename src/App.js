import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import ScrollUpButton from "react-scroll-up-button";
import { projects } from "./data/projects";
import Helmet from "react-helmet";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjectDescription from "./components/ProjectDescription";
import ProjectListSection from "./components/ProjectListSection";
import LoadingPanel from "./components/LoadingPanel";

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
		// console.log("project data: ", this.state.projects);
		// console.log("Environemnt: ", process.env.NODE_ENV);
		return (
			<div className="app">
				<Helmet>
					<title>Sebastian | Front-end Portfolio</title>
					<link
						href="https://fonts.googleapis.com/css?family=Overpass:200,300,400,600|Roboto+Mono:300,400,500"
						rel="stylesheet"
					/>
				</Helmet>
				<LoadingPanel />
				<ScrollUpButton
					ContainerClassName="ScrollUpButton__Container"
					TransitionClassName="ScrollUpButton__Toggled"
					AnimationDuration={1000}
				>
				      <svg viewBox="0 0 32 32" >
				        <path className="path1" d="M27.414 12.586l-10-10c-0.781-0.781-2.047-0.781-2.828 0l-10 10c-0.781 0.781-0.781 2.047 0 2.828s2.047 0.781 2.828 0l6.586-6.586v19.172c0 1.105 0.895 2 2 2s2-0.895 2-2v-19.172l6.586 6.586c0.39 0.39 0.902 0.586 1.414 0.586s1.024-0.195 1.414-0.586c0.781-0.781 0.781-2.047 0-2.828z" fill="#f5612b"></path>
				      </svg>
				    </ScrollUpButton>
				<Header />
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
