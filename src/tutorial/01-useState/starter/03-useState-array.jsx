import { data } from "../../../data";
import { useState } from "react";

const UseStateArray = () => {
	const [people, setPeople] = useState(data);

	const removeItem = (id) => {
		const newPeople = people.filter((person) => person.id !== id);
		setPeople(newPeople);
	};

	const clearItems = () => {
		setPeople([]);
	};

	return (
		<div>
			{people.map((person) => {
				const { id, name } = person;
				return (
					<div key={id}>
						<h4>{name}</h4>
						<button
							type="button"
							className="btn"
							onClick={() => removeItem(id)}
						>
							Delete
						</button>
					</div>
				);
			})}
			<button type="button" className="btn" onClick={clearItems}>
				Clear
			</button>
		</div>
	);
};

export default UseStateArray;
