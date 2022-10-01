import React from 'react';

export const M: React.FC = () => {
	const path1 = `M949 508V406.455C949 379.142 971.142 357 998.455 357V357C1025.77 357 1047.91 379.142 1047.91 406.455V508`;
	const path2 = `M1048.55 508V406.455C1048.55 379.142 1070.69 357 1098 357V357C1125.31 357 1147.45 379.142 1147.45 406.455V508`;

	return (
		<>
			<path d={path1} stroke="currentcolor" strokeWidth="46" />
			<path d={path2} stroke="currentcolor" strokeWidth="46" />
		</>
	);
};
