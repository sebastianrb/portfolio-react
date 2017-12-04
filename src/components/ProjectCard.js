import React from "react";
import { Link } from "react-router-dom";

import Code from "../images/code.svg";

export default class ProjectCard extends React.Component {
	// constructor(props) {
	// 	super(props);
	// }

	shouldComponentUpdate(nextProps, nextState) {
		return false;
	}

	render() {
		const project = this.props.project;
		let id = project.id;
		if (id === 0) {
			return (
				<li className="project-list__project portfolio-tile">
					<Link to={`/project/${id}`}>
						<div className="project-list__project-text">
							<div className="project-list__project-tech-button">
								<img src={Code} alt="code" />
							</div>
							<div className="project-list__project-tech-popup">
								<p className="project-list__project-tech-caption">Technologies Used</p>
								{project.technologies}
							</div>
							<h3 className="project-list__project-name">
								{project.name}
							</h3>
							<p className="project-list__project-short-description">
								{project.shortDescription}
							</p>
						</div>
					</Link>
				</li>
			);
		} else {
			return (
				<li key={id} className="project-list__project">
					<Link to={`/project/${id}`}>
						<div className="project-list__project-text">
							<div className="project-list__project-tech-button">
								<img src={Code} alt="code" />
							</div>
							<div className="project-list__project-tech-popup">
								<p className="project-list__project-tech-caption">Technologies Used</p>
								{project.technologies}
							</div>
							<h3 className="project-list__project-name">
								{project.name}
							</h3>
							<p className="project-list__project-short-description">
								{project.shortDescription}
							</p>
						</div>
						<div className="project-list__project-image-container">
							<img src={project.image} alt="project" />
						</div>
					</Link>
				</li>
			);
		}
	}
}
