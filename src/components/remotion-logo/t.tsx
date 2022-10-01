import React from 'react';

const d1 = 'M1410 292L1410 509';

export const T: React.FC = () => {
	return (
		<>
			<path d={d1} stroke="black" strokeWidth="46" />
			<path
				d="M1410 358L1451 358"
				stroke="black"
				strokeWidth="46"
				strokeLinecap="round"
			/>
		</>
	);
};
