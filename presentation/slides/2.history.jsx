import React from 'react/addons';
import { Heading, Slide, Text, Appear, Image, Code } from '../../src/spectacle';

import preload from '../../src/utils/preloader';

let images = [require('../assets/reactgrowth.jpg')];
preload(images);
let [growth] = images;

export default () => [
	<Slide transition={ ['slide'] } bgColor='black' notes='React and Flux have only been around for a few years, but have since become the hottest topic in web design.'>
		<Heading size={ 1 } fit >
			First, a history.
		</Heading>
	</Slide>,

	<Slide transition={ ['slide'] } bgColor='black' notes='In 2013, Facebook open sourced React, introducing itself as the new V for MVC.'>
		<Text textSize='3em' bold textColor='tertiary'>May 2013</Text>
		<Appear fid='1'>
			<Heading size={ 1 } fit caps textColor='secondary'>
				React
			</Heading>
			<Text textSize='2em' bold textColor='tertiary'>A JAVASCRIPT LIBRARY FOR BUILDING USER INTERFACES</Text>
		</Appear>
	</Slide>,

	<Slide transition={ ['slide'] } bgColor='black' notes='React simplifies the data-to-view problem, by representing it as a simple pure function of the application state.'>
		<Code textColor='tertiary'>
			UI = View(State)
		</Code>
	</Slide>,

	<Slide transition={ ['slide'] } bgColor='black' notes='The library has since grown rapidly through the web developer base. A table with React topic growth on Reddit -- essentially doubling every other month.'>
		<Image width='100%' src={ growth }/>
		<Text textSize='2em' bold textColor='secondary'>Is React killing Angular?</Text>
		<Text textSize='2em' bold textColor='tertiary'>http://qr.ae/RHoP6w</Text>
	</Slide>,

	<Slide transition={ ['slide'] } bgColor='black' notes='People are loving React, but are running into problems dealing with data management. Jing Chen introduces the Flux architecture at the F8 2014 Developer Conference, as the data management solution to rule them all.'>
		<Text textSize='3em' bold textColor='tertiary'>April 2014</Text>
		<Appear fid='1'>
			<Text textSize='3em' bold textColor='tertiary'>@jingc introduces Flux at F8 2014</Text>
		</Appear>
	</Slide>
];
