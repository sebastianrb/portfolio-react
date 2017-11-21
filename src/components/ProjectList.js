import React from "react";
import Fade from 'react-reveal/Fade';
import ProjectCard from "./ProjectCard";
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
				return <ProjectCard key={project.id} project={project} />;
			});

		if (list.length <= 0) {
			list = (
				<li key="not-found" className="project-not-found">
					No projects found
				</li>
			);
		}

		return (
			<div className="project-list">
				<Fade delay={0} fraction={0.2} duration={600}>
					<ul className="project-list__list">
						<FlipMove
							duration={700}
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
				</Fade>
			</div>
		);
	}
}
