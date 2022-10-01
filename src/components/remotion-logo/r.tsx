import React from 'react';

const d = `M630 508
V415
C630 383.52 655.52 358 687 358
h 16`;

export const R: React.FC = () => {
	return <path d={d} strokeWidth="46" stroke="black" />;
};
