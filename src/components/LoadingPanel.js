import React from "react";

export default class LoadingPanel extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			started: false,
			finished: false,
			loadingDuration: 2.6
		};
	}

	componentDidMount() {
		this.setState(
			{
				started: true
			},
			() => {
				setTimeout(() => {
					this.setState({
						finished: true
					});
				}, this.state.loadingDuration * 1000);
			}
		);
	}

	render() {
		return (
			<div
				className={`loading-panel ${this.state.started ? "loading-started" : ""} ${this.state.finished
					? "loading-finished"
					: ""}`}
			>
				<p className="loading-panel__text">
					<span className="loading-panel__letter letter-1">w</span>
					<span className="loading-panel__letter letter-2">e</span>
					<span className="loading-panel__letter letter-3">l</span>
					<span className="loading-panel__letter letter-4">c</span>
					<span className="loading-panel__letter letter-5">o</span>
					<span className="loading-panel__letter letter-6">m</span>
					<span className="loading-panel__letter letter-7">e</span>
				</p>
			</div>
		);
	}
}
