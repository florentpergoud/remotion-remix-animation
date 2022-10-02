import {AbsoluteFill} from 'remotion';
import {E} from './remix-logo/e';
import {I} from './remix-logo/i';
import {M} from './remix-logo/m';
import {R} from './remix-logo/r';
import {X} from './remix-logo/x';

interface Props {
	horizontalOffset?: number;
}

export const RemixNotAnimated = ({horizontalOffset}: Props) => {
	return (
		<AbsoluteFill
			style={{
				display: 'flex',
				left: `calc(16% + ${horizontalOffset}px)`,
				top: '7%',
				transform: 'scale(1)',
			}}
		>
			<R marginLeft={0} marginTop={411} />
			<E marginLeft={82} marginTop={411} />
			<M marginLeft={149} marginTop={411} />
			<I marginLeft={257} marginTop={411} />
			<X marginLeft={290} marginTop={411} />
		</AbsoluteFill>
	);
};
