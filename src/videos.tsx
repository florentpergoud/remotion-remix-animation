import {Composition} from 'remotion';
import './load-fonts';
import {LogoAnimation} from './logo-animation';

export const RemotionVideo = () => {
	return (
		<>
			<Composition
				id="LogoAnimation"
				component={LogoAnimation}
				durationInFrames={150}
				fps={30}
				width={1920}
				height={1080}
			/>
		</>
	);
};
