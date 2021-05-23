import styled, { keyframes } from "styled-components";
import { ReactComponent as UploadIcon } from "../svg/upload.svg";
import { ReactComponent as CheckedIcon } from "../svg/check.svg";

const Container = styled.div`
	position: relative;
`;
const Circle = styled.div`
	width: 100px;
	height: 100px;
	transform: rotate(-90deg);
	cursor: pointer;

	.fill-circle {
		fill: #040224;
	}
	.border-circle {
		cursor: pointer;
		fill: none;
		stroke: #4d80e4;
		stroke-width: 5px;
		stroke-dashoffset: ${(p) => 302 - (p.percentage / 100) * 302};
		stroke-dasharray: 302 302;
	}
`;
const appear = keyframes`
from{transform: scale(0);}
to{transform: scale(1);}
`;
const Icons = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translateX(-50%) translateY(-50%) scale(1);
	cursor: pointer;

	.animate {
		animation: ${appear} 0.5s linear;
	}
`;

const UploadButton = ({ percentage, handleClick }) => {
	return (
		<Container onClick={handleClick}>
			<Circle percentage={percentage}>
				<svg>
					<circle className="fill-circle" r="50" cx="50" cy="50" />
					<circle className="border-circle" r="47.5" cx="50" cy="50" />
				</svg>
			</Circle>
			<Icons>
				{percentage === 100 ? (
					<CheckedIcon className="animate" />
				) : (
					<UploadIcon />
				)}
			</Icons>
		</Container>
	);
};

export default UploadButton;
