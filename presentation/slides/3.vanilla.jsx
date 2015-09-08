import React from 'react/addons';
import { Heading, Slide, Text, Appear, Image } from '../../src/spectacle';

import preload from '../../src/utils/preloader';

let images = [require('../assets/flux.png'), require('../assets/mvc.png'), require('../assets/dispatchdispatch.jpg')];
preload(images);
let [flux, mvc, dispatchdispatch] = images;

export default () => [
	<Slide transition={ ['slide'] } bgColor='primary' notes='By this time, React has become mildly ubiquitous. Flux is the new craze.'>
		<Heading size={ 1 } fit >
			Flux
		</Heading>
	</Slide>,

	<Slide transition={ ['slide'] } bgColor='primary' notes='Flux aims to solve the confusing graphs of traditional MVC by introducing a unidirectional data flow.'>
		<Image src={ mvc } />
		<Appear fid='1'>
			<Text textSize='3em' bold textColor='tertiary'>↓</Text>
			<Image src={ flux } />
		</Appear>
	</Slide>,

	<Slide transition={ ['slide'] } bgColor='primary' notes='Flux has a lot over MVC.'>
		<Heading textColor='secondary'>Strengths</Heading>
		<Appear fid='1'>
			<Text textSize='3em' bold textColor='tertiary'>Easier to reason about</Text>
		</Appear>
		<Appear fid='2'>
			<Text textSize='3em' bold textColor='tertiary'>Unidirectional flow</Text>
		</Appear>
		<Appear fid='3'>
			<Text textSize='3em' bold textColor='tertiary'>Debuggable</Text>
		</Appear>
		<Appear fid='4'>
			<Text textSize='3em' bold textColor='tertiary'>Reactive over Proactive</Text>
		</Appear>
	</Slide>,

	<Slide transition={ ['slide'] } bgColor='primary' notes='It is now a gigantic space race for everyone to build the best flux implementation.'>
		<Heading size={ 1 } fit >
			Space Race!
		</Heading>
		<Appear fid='1'>
			<Text textSize='1.75em' bold textColor='tertiary'>Reflux</Text>
			<Text textSize='1.75em' bold textColor='tertiary'>Fluxxor</Text>
			<Text textSize='1.75em' bold textColor='tertiary'>Fluxy</Text>
			<Text textSize='1.75em' bold textColor='tertiary'>Fluxible</Text>
			<Text textSize='1.75em' bold textColor='tertiary'>Marty</Text>
			<Text textSize='1.75em' bold textColor='tertiary'>McFly</Text>
			<Text textSize='1.75em' bold textColor='tertiary'>Alt</Text>
			<Text textSize='1.75em' bold textColor='tertiary'>Flummox</Text>
			<Text textSize='1.75em' bold textColor='tertiary'>DeLorean</Text>
			<Text textSize='1.75em' bold textColor='tertiary'>Barracks</Text>
			<Text textSize='1.75em' bold textColor='tertiary'>and dozens more.</Text>
		</Appear>
	</Slide>,

	<Slide transition={ ['slide'] } bgColor='primary' notes='We found out that React.renderToString could be used to quickly render a copy of the DOM on the server and send it to the client for fast page loads. We also found that Flux was not as good as we thought it was.'>
		<Text textSize='3em' bold textColor='tertiary'>Then, we discovered Isomorphic React.</Text>
		<Appear fid='1'>
			<Text textSize='3em' bold textColor='tertiary'>...as well as some limitations of vanilla Flux.</Text>
		</Appear>
	</Slide>,

	<Slide transition={ ['slide'] } bgColor='primary' notes=''>
		<Heading textColor='quaternary'>Weaknesses</Heading>
		<Appear fid='1'>
			<Text textSize='2em' bold textColor='tertiary'>Singleton = Not Isomorphic</Text>
		</Appear>
		<Appear fid='2'>
			<Text textSize='2em' bold textColor='tertiary'>Action Creators import the dispatcher = Not Testable</Text>
		</Appear>
		<Appear fid='3'>
			<Text textSize='2em' bold textColor='tertiary'>Heavy Boilerplate = Bad DX</Text>
		</Appear>
		<Appear fid='4'>
			<Text textSize='2em' bold textColor='tertiary'>Store Dependencies = this.waitFor(Store.dispatchToken) = ???</Text>
		</Appear>
		<Appear fid='5'>
			<Text textSize='2em' bold textColor='tertiary'>Async? Good luck.</Text>
		</Appear>
		<Appear fid='6'>
			<Text textSize='2em' bold textColor='tertiary'>Uncaught Error: Invariant Violation: Dispatch.dispatch(...)</Text>
			<Image src={ dispatchdispatch } />
		</Appear>
	</Slide>
];
