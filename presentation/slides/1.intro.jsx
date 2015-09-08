import React from 'react/addons';
import { Heading, Slide, Text } from '../../src/spectacle';

export default () => (
	<Slide transition={ ['zoom'] } bgColor='primary' notes={
`I'm Raphael, and I just started my Junior year at Montgomery Blair High School.
I've been using React for almost a year now, and I'm here today to tell you about React and Functional Flux.
In fact, these slides were written with React.
I made that Twitter account just for this talk, so don't expect anything to actually be there yet.`
	}>
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
