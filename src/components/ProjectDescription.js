import React from "react";
import EasyTransition from "react-easy-transition";
import { transitionSetting } from "../index.js";
import { Link } from "react-router-dom";
import _ from "lodash";

import "../styles/project-description.css";

const ProjectDescription = props => {
	const projects = props.projects;
	const projectID = props.match.params.id;
	const project = _.find(projects, function(object) {
		return object.id.toString() === projectID;
	});

	window.scroll(0, 0);

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
};

export default ProjectDescription;
