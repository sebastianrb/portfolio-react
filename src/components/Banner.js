import React from "react";
import Scroll from "react-scroll";
import downArrow from "../images/down-arrow.svg";

let scroll = Scroll.animateScroll;

export default class Banner extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			bannerHeight: ""
		};
	}

	componentDidMount() {
		//get banner height and save to state
		this.setState({
			bannerHeight: document.querySelector(".banner").offsetHeight
		});
	}

	render() {
		//logic
		//figure out background image
		const project = this.props.project;
		let backgroundImage = "";
		let styles = {};

		if (this.props.type === "project") {
			backgroundImage = project.image;
			styles = {
				backgroundImage: "url(" + backgroundImage + ")"
				// filter: "grayscale(1)",
				// opacity: "0.3"
			};
		}

		return (
			<div
				style={styles}
				className={`banner ${this.props.type === "intro" ? "intro-background" : "project-background"}`}
			>
				<div className="banner__overlay" />
				{/*<PortfolioDescription projects={this.state.projects} />*/}
				<div onClick={() => scroll.scrollTo(this.state.bannerHeight)} className="banner__down-arrow">
					<img src={downArrow} alt="down arrow" />
				</div>
				{this.props.children}
			</div>
		);
	}
}
