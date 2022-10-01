import React from 'react';

const d =
	'M874 421.5C874 456.696 845.668 485 811 485C776.332 485 748 456.696 748 421.5C748 386.304 776.332 358 811 358C845.668 358 874 386.304 874 421.5Z';

const d1 = 'M896 421.5 L 764 421.5';

export const E: React.FC = () => {
	return (
		<g
			style={{
				transformBox: 'fill-box',
				transformOrigin: 'center center',
			}}
		>
			<path d={d1} stroke="currentcolor" strokeWidth={32} />
			<mask
				id="mask1_108_2"
				style={{
					maskType: 'alpha',
				}}
				maskUnits="userSpaceOnUse"
				x="700"
				y="315"
				width="209"
				height="228"
			>
				<path
					d="M835 422H900.5L909 320.5L876.5 315L709.5 320.5L700 543H851L903 452.5H835V422Z"
					fill="black"
				/>
			</mask>
			<g mask="url(#mask1_108_2)">
				<path d={d} stroke="currentcolor" strokeWidth="46" />
			</g>
		</g>
	);
};
