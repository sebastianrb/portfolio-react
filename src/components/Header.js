import React from "react";
import FlipPopup from "./FlipPopup";
import "../styles/header.css";

export default class HeaderNav extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {}

	render() {
		return (
			<header className="header">
				<div className="header__title-container">
					<h3 className="header__title">Sebastian Ramirez-Brunner</h3>
					<p className="header__subtitle">Front-end Portfolio</p>
				</div>
				<FlipPopup />
			</header>
		);
	}
}
