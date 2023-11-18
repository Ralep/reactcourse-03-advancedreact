import { useState } from "react";

const UseStateObject = () => {
	const [person, setPerson] = useState({
		name: "Peter",
		age: 24,
		hobby: "Reading",
	});
	// const [name, setName] = useState("Tony");
	// const [age, setAge] = useState(24);
	// const [hobby, setHobby] = useState("Reading");

	const handleJohn = () => {
		setPerson({
			name: "John",
			age: 28,
			hobby: "Coding",
		});

		// only change one or some properties of an object
		// setPerson({ ...person, name: "Susan" });

		// setName("John");
		// setAge(28);
		// setHobby("Coding");
	};

	const { name, age, hobby } = person;

	return (
		<div>
			<h3>useState object example</h3>
			<p>Name: {name}</p>
			<p>Age: {age}</p>
			<p>Hobby: {hobby}</p>
			<br />
			<button className="btn" type="button" onClick={handleJohn}>
				Show John
			</button>
		</div>
	);
};

export default UseStateObject;
