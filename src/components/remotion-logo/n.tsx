import React from 'react';

const d =
	'M1771 485V415C1771 383.52 1796.52 358 1828 358V358C1859.48 358 1885 383.52 1885 415V485';

export const N: React.FC = () => {
	return <path d={d} stroke="black" strokeWidth="46" strokeLinecap="square" />;
};
