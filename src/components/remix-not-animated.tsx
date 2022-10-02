import {AbsoluteFill} from 'remotion';
interface Props {
	horizontalOffset?: number;
}

export const RemixNotAnimated = ({horizontalOffset}: Props) => {
	return (
		<AbsoluteFill
			style={{
				display: 'flex',
				left: `calc(25% - ${horizontalOffset}px)`,
				top: '45%',
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
				Remix
			</span>
		</AbsoluteFill>
	);
};
