import React from 'react/addons';
import { Heading, Slide, Text, Appear, Image, Code } from '../../src/spectacle';

import preload from '../../src/utils/preloader';

let images = [require('../assets/reactgrowth.jpg'), require('../assets/trends.png')];
preload(images);
let [growth, trends] = images;

export default () => [
	<Slide transition={ ['slide'] } bgColor='black' notes={
`React and Flux have only been around for a few years, but have since become two of the hottest topics in web design.`
	}>
		<Heading size={ 1 } fit >
			First, a history.
		</Heading>
	</Slide>,

	<Slide transition={ ['slide'] } bgColor='black' notes={
`In 2013, Facebook open sourced React, introducing itself as the new V for MVC, the Model-View-Controller architecture.`
	}>
		<Text textSize='3em' bold textColor='tertiary'>May 2013</Text>
		<Appear>
			<Heading size={ 1 } fit caps textColor='secondary'>
				React
			</Heading>
			<Text textSize='2em' bold textColor='tertiary'>A JAVASCRIPT LIBRARY FOR BUILDING USER INTERFACES</Text>
		</Appear>
	</Slide>,

	<Slide transition={ ['slide'] } bgColor='black' notes={
`React simplifies the data-to-view problem, by representing it as a pure function of the application state.
This means that if you pass the state into the view function twice, you'd get the same result.`
	}>
		<Code textColor='tertiary'>
			UI = View(State)
		</Code>
	</Slide>,

	<Slide transition={ ['slide'] } bgColor='black' notes={
`The library has since grown rapidly through the web developer base.
Here's a table with React topic growth on Reddit -- it's essentially doubled every other month.`
	}>
		<Image width='90%' src={ growth }/>
		<Text textSize='2em' bold textColor='secondary'>Is React killing Angular?</Text>
		<Text textSize='2em' bold textColor='tertiary'>http://qr.ae/RHoP6w</Text>
	</Slide>,

	<Slide transition={ ['slide'] } bgColor='black' notes={
`Google Trends agrees.`
	}>
		<Text textSize='3em' bold textColor='tertiary'>Or, visually:</Text>
		<Image width='100%' src={ trends } display='block'/>
	</Slide>,

	<Slide transition={ ['slide'] } bgColor='black' notes={
`People are loving React.
But since React only works as the view layer, everyone is running into troubles dealing with data management.
At the F8 2014 Developer Conference, Jing Chen introduces the Flux architecture as the data management solution to rule them all.`
	}>
		<Text textSize='3em' bold textColor='tertiary'>What about the M?</Text>
		<Appear>
			<Text textSize='3em' bold textColor='tertiary'>April 2014</Text>
		</Appear>
		<Appear>
			<Text textSize='3em' bold textColor='tertiary'>@jingc introduces Flux at F8 2014</Text>
		</Appear>
	</Slide>
];
