import React from "react";

export default class ProjectSearch extends React.Component {
	constructor(props) {
		super(props);

		this.onSearchChange = this.onSearchChange.bind(this);
	}

	onSearchChange(event) {
		let searchValue = event.target.value;
		this.props.onSearchChange(searchValue);
	}

	onSubmit(event) {
		event.preventDefault();
	}

	render() {
		return (
			<div className="project-search">
				<form onSubmit={this.onSubmit}>
					<input
						type="text"
						className="project-search__search-box"
						placeholder="Find projects based on technology, project title, or anything else!"
						value={this.props.searchTerm}
						onChange={this.onSearchChange}
						onFocus={this.props.onSearchFocus}
						onBlur={this.props.onSearchBlur}
					/>
				</form>
			</div>
		);
	}
}
