import React from "react";
import InputBoxDoneTyping from "react-input-box-done-typing";

export default class ProjectSearch extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: false
		};

		this.onSearchChange = this.onSearchChange.bind(this);
		this.loadingToggle = this.loadingToggle.bind(this);
	}

	onSearchChange(searchValue) {
		// let searchValue = event.target.value;
		this.props.onSearchChange(searchValue);
	}

	onSubmit(event) {
		event.preventDefault();
	}

	loadingToggle(value) {
		let timeout = "";
		if (timeout) {
			clearTimeout(timeout);
		}
		this.setState(
			{
				loading: false
			},
			() => {
				if (value === "") {
					this.setState({
						loading: false
					});
				} else {
					timeout = setTimeout(() => {
						this.setState({
							loading: true
						});
					});
				}
			}
		);
	}

	render() {
		return (
			<div className="project-search">
				<form onSubmit={this.onSubmit} className="project-search__form">
					<InputBoxDoneTyping
						id="input-box-done-typing"
						className="project-search__search-box"
						placeholder="Find projects based on technologies used, project title, keywords, etc..."
						maxLength={20}
						defaultValue=""
						autoComplete="off"
						onChange={value => {
							this.loadingToggle(value);
						}}
						doneTyping={value => {
							this.onSearchChange(value);
						}}
						doneTypingInterval={700}
					/>
					<div className={`project-search__loading-bar ${this.state.loading ? "loading" : ""}`} />
				</form>
			</div>
		);
	}
}
