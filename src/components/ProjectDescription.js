import React from "react";
import EasyTransition from "react-easy-transition";
import ScrollAnimation from "react-animate-on-scroll";
import { transitionSetting } from "../index.js";
import { Link } from "react-router-dom";
import _ from "lodash";
import Banner from "./Banner";

import Arrow from "../images/down-arrow.svg";

import "../styles/project-description.css";

export default class ProjectDescription extends React.Component {
	componentDidMount() {
		window.scroll(0, 0);
	}

	render() {
		const projects = this.props.projects;
		const projectID = this.props.match.params.id;
		const project = _.find(projects, function(object) {
			return object.id.toString() === projectID;
		});

		console.log(typeof projectID);

		let technologyArray = project.technologyObjects;
		let technologyList = technologyArray.map(tech => {
			const imgURL = require(`../images/tech-icons/${tech.tag}.png`);
			return (
				<li key={tech.name} className="project-description__technology-list-item">
					<img src={imgURL} alt="tech" />
					<p>
						{tech.name}
					</p>
				</li>
			);
		});

		return (
			<EasyTransition
				path={window.location.pathname}
				initialStyle={{ opacity: 0, transform: "scale(.95)" }}
				transition={transitionSetting}
				finalStyle={{ opacity: 1, transform: "scale(1)" }}
			>
				<Banner type="project" project={project}>
					<h3 className="banner__project-description">
						<span>Project: </span>
						{project.name}
					</h3>
				</Banner>
				<section className="project-description">
					<p className="project-description__home-link">
						<Link to="/">
							<img src={Arrow} alt="arrow" />Go Home
						</Link>
					</p>
					<ScrollAnimation animateIn="fadeIn" offset={220} duration={0.6} animateOnce={true}>
						<div className="project-description__section">
							<h3 className="project-description__description">
								{project.description}
							</h3>
						</div>
						<div className="project-description__section">
							<h4 className="project-description__technology-header">Technologies used</h4>
							<ul className="project-description__technology-list">
								{technologyList}
							</ul>
						</div>
						<div className="project-description__section project-description__section--links">
							<h4 className="project-description__links-header">Check out the project</h4>
							<div className="project-description__buttons">
								<button
									className={`project-description__demo-link project-link ${projectID === "0"
										? "no-demo"
										: ""}`}
								>
									<a href={project.demoLink}>View Demo</a>
								</button>
								<button
									className={`project-description__github-link project-link ${!project.githubLink
										? "github-disabled"
										: ""}`}
								>
									<a href={project.githubLink}>View GitHub Repo</a>
									<div className="github-disabled-message">
										Sorry, this repo belongs to an organization and is private
									</div>
								</button>
							</div>
						</div>
					</ScrollAnimation>
				</section>
			</EasyTransition>
		);
	}
}
