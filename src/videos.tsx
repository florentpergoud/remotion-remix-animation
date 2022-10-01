import {Composition} from 'remotion';
import './load-fonts';
import {LogoEntrance} from './logo-entrance';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="LogoEntrance"
				component={LogoEntrance}
				durationInFrames={150}
				fps={30}
				width={1920}
				height={1080}
			/>
		</>
	);
};
