import React from "react";
import EasyTransition from "react-easy-transition";
import { transitionSetting } from "../index.js";
import ProjectSearch from "./ProjectSearch";
import ProjectList from "./ProjectList";
// import FocusBackground from "./FocusBackground";

import "../styles/project-list.css";

export default class ProjectListSection extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			searchTerm: "",
			searchFocused: false
		};

		this.onSearchChange = this.onSearchChange.bind(this);
	}

	onSearchChange(text) {
		this.setState({
			searchTerm: text
		});
	}

	render() {
		return (
			<EasyTransition
				path={window.location.pathname}
				// eslint-disable-line
				initialStyle={{ opacity: 0, transform: "scale(.9)" }}
				transition={transitionSetting}
				finalStyle={{ opacity: 1, transform: "scale(1)" }}
			>
				<section className="project-list-section">
					{/*<FocusBackground shown={this.state.searchFocused} />*/}
					<ProjectSearch
						searchTerm={this.state.searchTerm}
						onSearchChange={this.onSearchChange}
						onSearchBlur={this.onSearchBlur}
						onSearchFocus={this.onSearchFocus}
					/>
					<ProjectList projects={this.props.projects} searchTerm={this.state.searchTerm} />
				</section>
			</EasyTransition>
		);
	}
}
