import {AbsoluteFill} from 'remotion';
import {E} from './remotion-logo/e';
import {FirstO} from './remotion-logo/first-o';
import {I} from './remotion-logo/i';
import {M} from './remotion-logo/m';
import {N} from './remotion-logo/n';
import {R} from './remotion-logo/r';
import {SecondO} from './remotion-logo/second-o';
import {T} from './remotion-logo/t';

interface Props {
	horizontalOffset?: number;
}

export const RemotionAnimated = ({horizontalOffset = 0}: Props) => {
	return (
		<AbsoluteFill
			style={{
				display: 'flex',
				left: `calc(16% + ${horizontalOffset}px)`,
				top: '7%',
				transform: 'scale(0.45)',
			}}
		>
			<R />
			<E />
			<M />
			<FirstO />
			<T />
			<I />
			<SecondO />
			<N />
		</AbsoluteFill>
	);
};
