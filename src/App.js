import { useEffect, useState } from "react";
import papa from "papaparse";

import "./App.css";

function App() {
	const [cars, setCars] = useState([]);
	const preparedData = (data) => {
		const json = data.map((line, index) => {
			if (index > 0) {
				let obj = {};
				data[0].forEach((key, j) => (obj = { ...obj, [key]: line[j] }));
				return obj;
			}
			return null;
		});
		json.shift();
		console.log(json);
		setCars(json);
	};
	useEffect(() => {
		fetch(
			"https://docs.google.com/spreadsheets/d/e/2PACX-1vSfzrIXvrQ-3p8rwErgELD88WKtZvb4d3ib_m8PQVf1ipvlPD03FmhbjQnDn57ULVaGTeu1IFNkU7ir/pub?output=csv"
		)
			.then((result) => result.text())
			.then((text) => papa.parse(text))
			.then((data) => preparedData(data.data));
	}, []);
	return (
		<div className="App">
			<h1>Data GoogleSheet</h1>
			{cars.length > 0 &&
				cars.map((car) => <div key={car.id} {...car.company_name}></div>)}
		</div>
	);
}

export default App;
