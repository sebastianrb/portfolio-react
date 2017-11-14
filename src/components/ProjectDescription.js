import React from "react";
import EasyTransition from "react-easy-transition";
import { transitionSetting } from "../index.js";
import { Link } from "react-router-dom";
import _ from "lodash";
import $ from "jquery";

import "../styles/project-description.css";

export default class ProjectDescription extends React.Component {
	componentDidMount() {
		$("body, html").animate(
			{
				scrollTop: 500
			},
			800
		);
	}

	render() {
		const projects = this.props.projects;
		const projectID = this.props.match.params.id;
		const project = _.find(projects, function(object) {
			return object.id.toString() === projectID;
		});

		return (
			<EasyTransition
				path={window.location.pathname}
				initialStyle={{ opacity: 0, transform: "scale(.9)" }}
				transition={transitionSetting}
				finalStyle={{ opacity: 1, transform: "scale(1)" }}
			>
				<div className="project-description">
					<p>
						Title: {project ? project.name : "Sorry, nothing found"}
					</p>
					<p>
						<Link to="/">Go Home</Link>
					</p>
				</div>
			</EasyTransition>
		);
	}
}
