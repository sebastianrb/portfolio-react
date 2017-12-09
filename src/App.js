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
				      {/*<svg viewBox="0 0 32 32" >
				        <path className="path1" d="M27.414 12.586l-10-10c-0.781-0.781-2.047-0.781-2.828 0l-10 10c-0.781 0.781-0.781 2.047 0 2.828s2.047 0.781 2.828 0l6.586-6.586v19.172c0 1.105 0.895 2 2 2s2-0.895 2-2v-19.172l6.586 6.586c0.39 0.39 0.902 0.586 1.414 0.586s1.024-0.195 1.414-0.586c0.781-0.781 0.781-2.047 0-2.828z" fill="#f5612b"></path>
				      </svg>*/}

				      <svg  id="Capa_1" style={{"enableBackground":"new 0 0 284.929 284.929"}} width="90%" version="1.1" viewBox="0 0 284.929 284.929" x="0px" y="0px" xmlSpace="preserve">
				      	<g>
				      		<path d="M282.082,195.285L149.028,62.24c-1.901-1.903-4.088-2.856-6.562-2.856s-4.665,0.953-6.567,2.856L2.856,195.285   C0.95,197.191,0,199.378,0,201.853c0,2.474,0.953,4.664,2.856,6.566l14.272,14.271c1.903,1.903,4.093,2.854,6.567,2.854   c2.474,0,4.664-0.951,6.567-2.854l112.204-112.202l112.208,112.209c1.902,1.903,4.093,2.848,6.563,2.848   c2.478,0,4.668-0.951,6.57-2.848l14.274-14.277c1.902-1.902,2.847-4.093,2.847-6.566   C284.929,199.378,283.984,197.188,282.082,195.285z" fill="#f5612b"/>
				      	</g>
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
