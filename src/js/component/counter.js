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

/*const [one, setOne] = useState(0);
const [two, setTwo] = useState(0);
const [tree, setTree] = useState(0);
const [four, setFour] = useState(0);
const [five, setFive] = useState(0);
const [six, setSix] = useState(0);

setTimeout(() => {
if (one < 9) {
setOne(one + 1);
} else {
setOne(0);
if (two < 5) {
setTwo(two + 1);
} else {
setTwo(0);
if (tree < 9) {
setTree(tree + 1);
} else {
setTree(0);
if (four < 5) {
setFour(four + 1);
} else {
setFour(0);
if (five < 9) {
setFive(five + 1);
} else {
setFive(0);
setSix(six + 1);
}
}
}
}
}
}, 1000);*/
