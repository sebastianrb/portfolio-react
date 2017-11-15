import React from "react";
import _ from "lodash";

const PortfolioDescription = props => {
	//logic
	const portfolioProject = _.find(props.projects, project => project.name === "Front-end Portfolio");
	const portfolioDescription = portfolioProject.description;
	//return
	return (
		<section className="portfolio-description">
			<p className="portfolio-description__quote">Hey there, I'm Sebastian and I build sweet user interfaces.</p>
			{/*			<p className="portfolio-description__author">-Conan O'Brien</p>*/}
		</section>
	);
};

export default PortfolioDescription;
