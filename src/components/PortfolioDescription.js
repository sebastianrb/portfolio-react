import React from "react";
import _ from "lodash";

const PortfolioDescription = props => {
	//logic

	//return
	return (
		<section className="portfolio-description">
			<p className="portfolio-description__quote">
				I'm a React-focused front-end developer based in NYC. Some fun facts:
			</p>
			<ul className="portfolio-description__fact-list" />
		</section>
	);
};

export default PortfolioDescription;
