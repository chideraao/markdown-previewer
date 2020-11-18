import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Inputdiv from "./components/Inputdiv";
import MarkupDisplay from "./components/MarkupDisplay";
import ToggleButton from "./components/ToggleButton";

function App() {
	const [markdown, setMarkdown] = useState("");
	const [selected, setSelected] = useState(false);

	const updateMarkdown = (e) => {
		setMarkdown(e.target.value);
	};

	return (
		<div className="App">
			<Header />
			<ToggleButton
				selected={selected}
				toggleSelected={() => {
					setSelected(!selected);
				}}
			/>
			{selected ? (
				<Inputdiv markdown={markdown} updateMarkdown={updateMarkdown} />
			) : (
				<MarkupDisplay markdown={markdown} />
			)}
		</div>
	);
}
export default App;
