import {interpolate, useVideoConfig} from 'remotion';
import {spring, useCurrentFrame} from 'remotion';
import {Sequence} from 'remotion';
import {PlusSymbol} from './components/plus-symbol';
import {RemixLineToPerson} from './components/remix-logo/remix-line-to-person';
import {RemixNotAnimated} from './components/remix-logo/remix-not-animated';
import {RemixPersonToFusion} from './components/remix-logo/remix-person-to-fusion';
import {RemotionLineToPerson} from './components/remotion-logo/remotion-line-to-person';
import {RemotionNotAnimated} from './components/remotion-logo/remotion-not-animated';
import {RemotionPersonToFusion} from './components/remotion-logo/remotion-person-to-fusion';

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
				durationInFrames={fps}
				style={{
					backgroundColor: 'white',
				}}
			>
				<RemixLineToPerson horizontalOffset={remixXOffset} />
				<RemotionLineToPerson horizontalOffset={remotionXOffset} />
				<PlusSymbol />
			</Sequence>
			<Sequence
				from={fps * 2}
				durationInFrames={fps}
				style={{
					backgroundColor: 'white',
				}}
			>
				<RemixPersonToFusion horizontalOffset={remixXOffset} />
				<RemotionPersonToFusion horizontalOffset={remotionXOffset} />
				<PlusSymbol />
			</Sequence>
		</>
	);
};
