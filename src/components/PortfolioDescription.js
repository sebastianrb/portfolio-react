import React from "react";
import _ from "lodash";

const PortfolioDescription = props => {
	//logic
	const portfolioProject = _.find(props.projects, project => project.name === "Front-end Portfolio");
	const portfolioDescription = portfolioProject.description;
	//return
	return (
		<section className="portfolio-description">
			<p className="portfolio-description__quote">
				I'm a NYC-based, React-focused front-end developer. Some fun facts:
			</p>
			<ul className="portfolio-description__fact-list" />
			{/*			<p className="portfolio-description__author">-Conan O'Brien</p>*/}
		</section>
	);
};

export default PortfolioDescription;
