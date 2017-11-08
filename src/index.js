import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./styles/index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

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
