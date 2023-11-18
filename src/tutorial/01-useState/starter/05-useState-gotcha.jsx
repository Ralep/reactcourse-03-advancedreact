import { useState } from "react";

const UseStateGotcha = () => {
	const [count, setCount] = useState(0);

	const handleIncrease = () => {
		setCount((prevState) => {
			const newState = prevState + 1;
			return newState;
		});
	};

	return (
		<div>
			<p>{count}</p>
			<button className="btn" type="button" onClick={handleIncrease}>
				Increase
			</button>
		</div>
	);
};

export default UseStateGotcha;
