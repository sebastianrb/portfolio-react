import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./styles/index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

export const transitionSetting = "opacity 0.7s .1s, transform 0.5s";

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById("root")
);
registerServiceWorker();

//hot module refresh

if (process.env.NODE_ENV === "development") {
	if (module.hot) {
		module.hot.accept();
	}
}
