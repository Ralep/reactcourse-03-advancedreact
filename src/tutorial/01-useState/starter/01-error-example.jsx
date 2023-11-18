const ErrorExample = () => {
	let count = 0;

	const handleClick = () => {
		count = count + 1;
	};

	return (
		<>
			<div>
				<h2>{count}</h2>
				<button tpye="button" onClick={handleClick}>
					increase
				</button>
			</div>
		</>
	);
};

export default ErrorExample;
