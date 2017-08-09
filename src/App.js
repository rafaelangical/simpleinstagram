import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import Section from "./Section";
import Footer from "./Footer";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<Section />
				<Footer />
			</div>
		);
	}
}
export default App;
