import React from "react";

export default class Project extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				This is a project: {this.props.match.params.id}
			</div>
		);
	}
}
