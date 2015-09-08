import React from 'react/addons';
import { Heading, Slide, Text } from '../../src/spectacle';

export default () => (
	<Slide transition={ ['zoom'] } bgColor='primary'>
		<Heading size={ 1 } fit caps textColor='secondary'>
			React DC
		</Heading>
		<Heading size={ 1 } fit caps >
			Functional Flux
		</Heading>
		<br />
		<Heading size={ 2 } caps textColor='secondary'>
			by Raphael Mu
		</Heading>
		<br />
		<Text textSize='2em' textColor='tertiary'>@edge on github</Text>
		<Text textSize='2em' textColor='tertiary'>@synchronous on npm and reactiflux</Text>
		<Text textSize='2em' textColor='tertiary'>@fxsync on Twitter</Text>
	</Slide>
);
