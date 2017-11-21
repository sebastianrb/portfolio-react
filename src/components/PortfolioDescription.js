import React from "react";
import _ from "lodash";

const PortfolioDescription = props => {
	//logic

	//return
	return (
		<section className="portfolio-description">
			<p className="portfolio-description__quote">I'm a React-focused front-end developer.</p>
			<p className="portfolio-description__quote">Below, you can take a look at some of the projects I've built.</p>
			<ul className="portfolio-description__fact-list" />
		</section>
	);
};

export default PortfolioDescription;
