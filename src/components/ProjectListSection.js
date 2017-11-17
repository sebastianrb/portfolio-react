import React from "react";
import EasyTransition from "react-easy-transition";
import { transitionSetting } from "../index.js";
import ProjectSearch from "./ProjectSearch";
import ProjectList from "./ProjectList";
import Banner from "./Banner";
import PortfolioDescription from "./PortfolioDescription";

import "../styles/project-list.css";
import pictureIcon from "../images/picture.svg";

export default class ProjectListSection extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			searchTerm: "",
			searchFocused: false
		};

		this.onSearchChange = this.onSearchChange.bind(this);
	}

	componentWillMount() {
		window.scroll(0, 0);
	}

	onSearchChange(text) {
		this.setState({
			searchTerm: text
		});
	}

	render() {
		const PhotoIcon = props =>
			<div className="banner__picture-popup-container">
				<p className="header__photo-info-button">
					<img src={pictureIcon} alt="picture icon" />
				</p>
				<p className="banner__picture-popup">Photo taken by Sebastian</p>
			</div>;

		return (
			<EasyTransition
				path={window.location.pathname}
				// eslint-disable-line
				initialStyle={{ opacity: 0, transform: "scale(.9)" }}
				transition={transitionSetting}
				finalStyle={{ opacity: 1, transform: "scale(1)" }}
			>
				<Banner type={`intro`}>
					<PortfolioDescription />
					<PhotoIcon />
				</Banner>
				<section className="project-list-section">
					<ProjectSearch
						searchTerm={this.state.searchTerm}
						onSearchChange={this.onSearchChange}
						onSearchBlur={this.onSearchBlur}
						onSearchFocus={this.onSearchFocus}
					/>
					<ProjectList projects={this.props.projects} searchTerm={this.state.searchTerm} />
				</section>
			</EasyTransition>
		);
	}
}
