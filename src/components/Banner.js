import React from "react";
import downArrow from "../images/down-arrow.svg";

const Banner = props => {
	//logic
	//figure out background image
	console.log("Banner props: ", props);
	const project = props.project;
	let backgroundImage = "";
	let styles = {};

	if (props.type === "project") {
		console.log("type is project");
		backgroundImage = project.image;
		styles = {
			backgroundImage: "url(" + backgroundImage + ")"
			// filter: "grayscale(1)",
			// opacity: "0.3"
		};
		console.log(styles);
	}

	//return
	return (
		<div style={styles} className={`banner ${props.type === "intro" ? "intro-background" : "project-background"}`}>
			<div className="banner__overlay" />
			{/*<PortfolioDescription projects={this.state.projects} />*/}
			<div className="banner__down-arrow">
				<img src={downArrow} alt="down arrow" />
			</div>
			{props.children}
		</div>
	);
};

export default Banner;