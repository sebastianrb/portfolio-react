import React from "react";
import { Link } from "react-router-dom";
import FlipPopup from "./FlipPopup";
import MobileContactButtons from "./MobileContactButtons";
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
				<Link className="header__home-link" to="/">
					<div className="header__title-container">
						<h3 className="header__title">Sebastian Ramirez-Brunner</h3>
						<p className="header__subtitle">Front-end Portfolio</p>
					</div>
				</Link>
				<FlipPopup />
				<MobileContactButtons />
			</header>
		);
	}
}
