import {interpolate} from 'remotion';
import {spring} from 'remotion';
import {useCurrentFrame} from 'remotion';
import {useVideoConfig} from 'remotion';
import {AbsoluteFill} from 'remotion';
import {E} from './remix-logo/e';
import {I} from './remix-logo/i';
import {M} from './remix-logo/m';
import {R} from './remix-logo/r';
import {X} from './remix-logo/x';

interface Props {
	horizontalOffset?: number;
}

export const RemixAnimated = ({horizontalOffset}: Props) => {
	const {fps} = useVideoConfig();
	const frame = useCurrentFrame();

	const progress = spring({
		fps,
		frame,
		config: {
			damping: 200,
		},
	});

	const rHorizontalPosition = interpolate(progress, [0, 1], [0, 320]);

	const xHorizontalPosition = interpolate(progress, [0, 1], [290, 324]);
	const xVerticalPosition = interpolate(progress, [0, 1], [411, 324]);

	const iHorizontalPosition = interpolate(progress, [0, 1], [257, -1080]);
	const iVerticalPosition = interpolate(progress, [0, 1], [411, 745]);
	const iRotation = interpolate(progress, [0, 1], [0, 90]);

	const eHorizontalPosition = interpolate(progress, [0, 1], [82, 320]);
	const eVerticalPosition = interpolate(progress, [0, 1], [411, 220]);

	const mHorizontalPosition = interpolate(progress, [0, 1], [149, -1150]);
	const mVerticalPosition = interpolate(progress, [0, 1], [411, 745]);
	const mRotation = interpolate(progress, [0, 1], [0, 90]);

	return (
		<AbsoluteFill
			style={{
				display: 'flex',
				left: `calc(16% + ${horizontalOffset}px)`,
				top: '7%',
				transform: 'scale(1)',
			}}
		>
			<R marginLeft={rHorizontalPosition} marginTop={411} />
			<E marginLeft={eHorizontalPosition} marginTop={eVerticalPosition} />
			<M
				marginLeft={mHorizontalPosition}
				marginTop={mVerticalPosition}
				rotation={mRotation}
			/>
			<I
				marginLeft={iHorizontalPosition}
				marginTop={iVerticalPosition}
				rotation={iRotation}
			/>
			<X marginLeft={xHorizontalPosition} marginTop={xVerticalPosition} />
		</AbsoluteFill>
	);
};
