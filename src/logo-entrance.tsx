import {Sequence} from 'remotion';
import {AbsoluteFill} from 'remotion';
import {RemotionLogo} from './components/remotion-logo';

export const LogoEntrance = () => {
	return (
		<Sequence
			from={0}
			style={{
				backgroundColor: 'white',
			}}
		>
			<AbsoluteFill
				style={{
					display: 'flex',
					left: '25%',
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
			<AbsoluteFill
				style={{
					display: 'flex',
					left: '16%',
					justifyContent: 'center',
					transform: 'scale(0.45)',
				}}
			>
				<RemotionLogo />
			</AbsoluteFill>
			<AbsoluteFill
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<span
					style={{
						fontSize: 130,
						fontFamily: 'GTPlanar,sans-serif',
					}}
				>
					+
				</span>
			</AbsoluteFill>
		</Sequence>
	);
};
