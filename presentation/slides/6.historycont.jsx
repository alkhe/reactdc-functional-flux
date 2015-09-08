import React from 'react/addons';
import { Heading, Slide, Text, Appear } from '../../src/spectacle';

export default () => (
	<Slide transition={ ['slide'] } bgColor='black' notes='You can even put notes on your slide. How awesome is that?'>
		<Heading size={ 2 } fit textColor='secondary'>
			History, continued
		</Heading>
		<Appear fid='1'>
			<Text textSize='2em' bold textColor='tertiary'>June 2015 - ReactEurope, @gaearon introduces Redux</Text>
		</Appear>
		<Appear fid='2'>
			<Text textSize='2em' bold textColor='tertiary'>gaearon/redux is moved to rackt/redux (!!!)</Text>
		</Appear>
		<Appear fid='3'>
			<Text textSize='2em' bold textColor='tertiary'>reduce() + "change" event https://youtu.be/KtmjkCuV-EU?t=11m5s</Text>
		</Appear>
	</Slide>
);
