import {AbsoluteFill} from 'remotion';

interface Props {
	marginLeft?: number;
	marginTop?: number;
	rotation?: number;
	scale?: number;
}

export const R = ({
	marginLeft = 0,
	marginTop = 0,
	rotation = 0,
	scale = 1,
}: Props) => {
	return (
		<AbsoluteFill
			style={{
				marginLeft,
				marginTop,
				transform: `rotate(${rotation}deg) scale(${scale})`,
			}}
		>
			<span
				style={{
					fontSize: 130,
					color: 'black',
					fontFamily: 'Founders Grotesk,sans-serif',
					fontWeight: 700,
				}}
			>
				R
			</span>
		</AbsoluteFill>
	);
};
