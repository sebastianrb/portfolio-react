import React from "react";
import { Link } from "react-router-dom";

import Code from "../images/code.svg";

export default class ProjectCard extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			techCardShown: false
		};

		this.showTechCard = this.showTechCard.bind(this);
		this.hideTechCard = this.hideTechCard.bind(this);
	}

	shouldComponentUpdate(nextProps, nextState) {
		if(this.state === nextState) {
			return false;
		} else {
			return true;
		}
	}

	showTechCard() {
		this.setState({
			techCardShown: true
		});
	}

	hideTechCard() {
		this.setState({
			techCardShown: false
		});
	}

	render() {
		const project = this.props.project;
		let id = project.id;
		if (id === 0) {
			return (
				<li className="project-list__project portfolio-tile">
					<Link to={`/project/${id}`}>
						<div className="project-list__project-text">
							<div
								onMouseEnter={this.showTechCard}
								onMouseLeave={this.hideTechCard}
    								className="project-list__project-tech-button">

								<img src={Code} alt="code" />
							</div>
							<h3 className="project-list__project-name">
								{project.name}
							</h3>
							<p className="project-list__project-short-description">
								{project.shortDescription}
							</p>
						</div>
						<div className={`project-list__project-tech-popup ${this.state.techCardShown ? "tech-popup-shown" : "" }`}>
							<p className="project-list__project-tech-caption">Technologies Used</p>
							{project.technologies}
						</div>
					</Link>
				</li>
			);
		} else {
			return (
				<li key={id} className="project-list__project">
					<Link to={`/project/${id}`}>
						<div className="project-list__project-text">
							<div  onMouseEnter={this.showTechCard}
    								onMouseLeave={this.hideTechCard}
    								className="project-list__project-tech-button">

								<img src={Code} alt="code" />
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
						<div className={`project-list__project-tech-popup ${this.state.techCardShown ? "tech-popup-shown" : "" }`}>
							<p className="project-list__project-tech-caption">Technologies Used</p>
							{project.technologies}
						</div>
					</Link>
				</li>
			);
		}
	}
}
