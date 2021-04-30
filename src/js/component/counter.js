import React from "react";
export function Counter(Props) {
	return (
		<div
			className="bg-dark border border-light m-1 rounded text-center text-light"
			id="contador">
			<h1>{Props.numero}</h1>
		</div>
	);
}
