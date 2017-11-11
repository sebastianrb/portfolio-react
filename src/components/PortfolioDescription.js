import React from "react";
import _ from "lodash";

const PortfolioDescription = props => {
	//logic
	const portfolioProject = _.find(props.projects, project => project.name === "Front-end Portfolio");
	const portfolioDescription = portfolioProject.description;
	//return
	return (
		<section className="portfolio-description">
			<h3>Welcome!</h3>
			<p>
				This is my front-end web development portfolio. Here, you can check out a selection of my front-end
				work; choose a project from the list to see a description of the project and a link to it. To learn more
				about me, feel free to check out my "Developer Profile".
			</p>
			<p className="portfolio-description__text">
				{portfolioDescription}
			</p>
		</section>
	);
};

export default PortfolioDescription;
