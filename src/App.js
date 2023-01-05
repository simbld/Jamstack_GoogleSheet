import { useEffect } from "react";
import papa from "papaparse";

import "./App.css";

function App() {
	useEffect(() => {
		fetch(
			"https://docs.google.com/spreadsheets/d/e/2PACX-1vSfzrIXvrQ-3p8rwErgELD88WKtZvb4d3ib_m8PQVf1ipvlPD03FmhbjQnDn57ULVaGTeu1IFNkU7ir/pub?output=csv"
		)
			.then((result) => result.text())
			.then((text) => papa.parse(text))
			.then((data) => console.log(data));
	}, []);
	return (
		<div className="App">
			<h1>Data GoogleSheet</h1>
		</div>
	);
}

export default App;
