import React from "react";

const FocusBackground = props => {
	//logic

	//return
	return <div className={`focus-background ${props.shown ? "shown" : ""}`} />;
};

export default FocusBackground;
