import {interpolate, useVideoConfig} from 'remotion';
import {spring, useCurrentFrame} from 'remotion';
import {Sequence} from 'remotion';
import {PlusSymbol} from './components/plus-symbol';
import {RemixAnimated} from './components/remix-animated';
import {RemixNotAnimated} from './components/remix-not-animated';
import {RemotionAnimated} from './components/remotion-animated';
import {RemotionNotAnimated} from './components/remotion-not-animated';

export const LogoAnimation = () => {
	const {fps} = useVideoConfig();
	const frame = useCurrentFrame();

	const delay = 0;

	const progress = spring({
		fps,
		frame: frame - delay,
		config: {
			damping: 200,
		},
	});

	const remixXOffset = interpolate(progress, [0, 1], [-900, 180]);
	const remotionXOffset = interpolate(progress, [0, 1], [900, 0]);
	const plusYOffset = interpolate(progress, [0, 1], [900, 0]);

	return (
		<>
			<Sequence
				from={0}
				durationInFrames={fps}
				style={{
					backgroundColor: 'white',
				}}
			>
				<RemixNotAnimated horizontalOffset={remixXOffset} />
				<RemotionNotAnimated horizontalOffset={remotionXOffset} />
				<PlusSymbol verticalOffset={plusYOffset} />
			</Sequence>
			<Sequence
				from={fps}
				durationInFrames={fps * 3}
				style={{
					backgroundColor: 'white',
				}}
			>
				<RemixAnimated horizontalOffset={remixXOffset} />
				<RemotionAnimated horizontalOffset={remotionXOffset} />
				<PlusSymbol />
			</Sequence>
		</>
	);
};
