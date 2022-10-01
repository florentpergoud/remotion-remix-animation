import React from 'react';

const p1 = 'M1511 335 L1511 508';

export const I: React.FC = () => {
	return (
		<g>
			<circle cx="1510.5" cy="293.5" r="22" fill="currentcolor" />
			<path d={p1} stroke="currentcolor" strokeWidth="46" />
		</g>
	);
};
