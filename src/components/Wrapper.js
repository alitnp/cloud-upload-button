import { useState, useEffect } from "react";
import styled from "styled-components";
import UploadButton from "./UploadButton";
import { persian } from "persiantool";

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	input {
		width: 100px;
		z-index: 2;
	}
	p {
		height: 1rem;
		margin: 0.25rem 0;
		direction: rtl;
	}
`;

const Wrapper = () => {
	const [percentage, setPercentage] = useState(0);
	const [counting, setCounting] = useState(false);

	useEffect(() => {
		if (!counting) return;
		const interval = setInterval(() => {
			if (percentage === 99) {
				setCounting(false);
			}
			setPercentage(percentage + 1);
		}, 13);
		return () => {
			clearInterval(interval);
		};
	}, [counting, percentage]);

	const handleChange = (e) => {
		setPercentage(+e.target.value);
	};
	const handleClick = () => {
		setPercentage(0);
		setCounting(true);
	};

	return (
		<Container>
			<UploadButton percentage={percentage} handleClick={handleClick} />
			<p>
				{counting && "درحال بارگزاری..."}
				{percentage === 100 && "بارگزاری با موفقیت انجام شد."}
			</p>
			<p>{persian(percentage) + "%"}</p>
			<input
				type="range"
				min="0"
				max="100"
				value={percentage}
				onChange={handleChange}
			/>
		</Container>
	);
};

export default Wrapper;
