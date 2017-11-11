import React from "react";
import { Link } from "react-router-dom";
import FlipMove from "react-flip-move";
import testImage from "../images/bov.png";

export default class ProjectList extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {}

	render() {
		//logic
		const projects = this.props.projects;
		const searchTerm = this.props.searchTerm;
		let list;

		if (this.props.searchTerm === "") {
			list = projects.map(project => {
				let id = project.id;
				return (
					<li key={id} className="project-list__project">
						<Link to={`/project/${id}`}>
							<h3 className="project-list__project-name">
								{project.name}
							</h3>
							<p className="project-list__project-short-description">
								{project.shortDescription}
							</p>
							<div className="project-list__project-image-container">
								<img src={project.image} alt="project" />
							</div>
						</Link>
					</li>
				);
			});
		} else {
			list = projects
				.filter(project => {
					const searchThrough = `${project.name} ${project.shortDescription} ${project.description} ${project.technologies}`.toLowerCase();
					const searchTermArray = searchTerm.split(" ");
					let match = false;
					for (var i = 0; i < searchTermArray.length; i++) {
						if (searchThrough.indexOf(searchTermArray[i].toLowerCase()) >= 0) {
							match = true;
							break;
						}
					}

					return match;
				})
				.map(project => {
					let id = project.id;
					return (
						<li key={id} className="project-list__project">
							<Link to={`/project/${id}`}>
								{project.name}
							</Link>
						</li>
					);
				});
		}

		if (list.length <= 0) {
			list = (
				<li key="not-found" className="project-not-found">
					No projects found
				</li>
			);
		}

		return (
			<div className="project-list">
				<ul className="project-list__list">
					<FlipMove
						duration={400}
						easing="ease"
						staggerDelayBy={30}
						staggerDurationBy={20}
						onFinishAll={() => {
							this.forceUpdate();
						}}
					>
						{list}
					</FlipMove>
				</ul>
			</div>
		);
	}
}
