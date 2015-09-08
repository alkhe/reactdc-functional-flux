import React from 'react/addons';
import { Heading, Slide, Text, Appear } from '../../src/spectacle';

export default () => (
	<Slide transition={ ['slide'] } bgColor='black' notes='You can even put notes on your slide. How awesome is that?'>
		<Heading size={ 2 } fit textColor='secondary'>
			First, a history.
		</Heading>
		<Appear fid='1'>
			<Text textSize='2em' bold textColor='tertiary'>May 2013 - Facebook React goes Open Source</Text>
		</Appear>
		<Appear fid='2'>
			<Text textSize='2em' bold textColor='tertiary'>January 2015 - React.js Conf</Text>
		</Appear>
	</Slide>
);
