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

		let portfolioJSONText;
		if(projectID === "0") {
			portfolioJSONText = <span> You can view the data <a href="https://github.com/sebastianrb/portfolio-react/blob/master/src/data/projects.js" target="_blank" rel="noopener noreferrer">here.</a></span>
		} else {
			portfolioJSONText = "";
		}

		let technologyArray = project.technologyObjects;
		let technologyList = technologyArray.map(tech => {
			const imgURL = require(`../images/tech-icons/${tech.tag}.png`);
			return (
				<li key={tech.name} className="project-description__technology-list-item">
					<a href={tech.link} target="_blank">
						<img src={imgURL} alt="tech" />
						<p>
							{tech.name}
						</p>
					</a>
				</li>
			);
		});

		let githubButton;

		if (!project.githubLink) {
			githubButton = (
				<button className="project-description__github-link project-link github-disabled">
					<p>View GitHub Repo</p>{" "}
					<div className="github-disabled-message">
						Sorry, this repo belongs to an organization and is private
					</div>
				</button>
			);
		} else {
			githubButton = (
				<a href={project.githubLink} className="project-description__github-link project-link" target="_blank">
					<p>View GitHub Repo</p>{" "}
				</a>
			);
		}

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
					<ScrollAnimation animateIn="fadeIn" offset={270} duration={0.6} animateOnce={true}>
						<div className="project-description__section">
							<h3 className="project-description__description">
								{project.description}{portfolioJSONText}
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
								<a
									href={project.demoLink}
									className={`project-description__demo-link project-link ${projectID === "0"
										? "no-demo"
										: ""}`}
									target="_blank"
								>
									{" "}<p>View Demo</p>
								</a>
								{githubButton}
							</div>
						</div>
					</ScrollAnimation>
				</section>
				<p className="project-description__home-link">
					<Link to="/">
						<img src={Arrow} alt="arrow" />Home
					</Link>
				</p>
			</EasyTransition>
		);
	}
}
