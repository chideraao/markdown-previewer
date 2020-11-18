import React, { useState } from "react";
import { unstable_batchedUpdates } from "react-dom";
import "./App.css";
import Header from "./components/Header";
import Inputdiv from "./components/Inputdiv";
import MarkupDisplay from "./components/MarkupDisplay";

function App() {
	const [markdown, setMarkdown] = useState("");

	const updateMarkdown = (e) => {
		setMarkdown(e.target.value);
	};

	return (
		<div className="App">
			<Header />
			<Inputdiv markdown={markdown} updateMarkdown={updateMarkdown} />
			<MarkupDisplay markdown={markdown} />
		</div>
	);
}
export default App;
