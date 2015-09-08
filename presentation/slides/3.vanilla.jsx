import React from 'react/addons';
import { Heading, Slide, Text, Appear, Image, BlockQuote, Quote, Cite } from '../../src/spectacle';

import preload from '../../src/utils/preloader';

let images = [require('../assets/flux.png'), require('../assets/mvc.png'), require('../assets/dispatchdispatch.jpg')];
preload(images);
let [flux, mvc, dispatchdispatch] = images;

export default () => [
	<Slide transition={ ['slide'] } bgColor='primary' notes={
`By this time, React has become fairly ubiquitous.
Flux is now the new craze.`
	}>
		<Heading size={ 1 } fit >
			Flux
		</Heading>
	</Slide>,

	<Slide transition={ ['slide'] } bgColor='primary' notes={
`This is how the diagram for an ordinary MVC application would look like.
Flux aims to solve the confusing graphic relationships of traditional MVC by introducing a unidirectional data flow.`
	}>
		<Image src={ mvc } />
		<Appear>
			<Text textSize='3em' bold textColor='tertiary'>↓</Text>
			<Image src={ flux } />
		</Appear>
	</Slide>,

	<Slide transition={ ['slide'] } bgColor='primary' notes={
`Flux has a lot of benefits over MVC.
It's easier to trace and get your head around.
You always know where the data is going.
This also makes debugging especially easy.
Instead of having your data manage your views, your views subscribe to changes in the data.`
	}>
		<Heading textColor='secondary'>Strengths</Heading>
		<Appear>
			<Text textSize='3em' bold textColor='tertiary'>Easier to reason about</Text>
		</Appear>
		<Appear>
			<Text textSize='3em' bold textColor='tertiary'>Unidirectional flow</Text>
		</Appear>
		<Appear>
			<Text textSize='3em' bold textColor='tertiary'>Debuggable</Text>
		</Appear>
		<Appear>
			<Text textSize='3em' bold textColor='tertiary'>Reactive over Proactive</Text>
		</Appear>
	</Slide>,

	<Slide transition={ ['slide'] } bgColor='primary' notes={
`Facebook doesn't give you a library, just a specification.
This initiates a gigantic space race for everyone to jump on board and build the best Flux implementation out there.`
	}>
		<Heading size={ 1 }>
			Space Race!
		</Heading>
		<Appear>
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
			<Text textSize='1.75em' bold textColor='tertiary'>etc. by the dozens</Text>
		</Appear>
	</Slide>,

	<Slide transition={ ['slide'] } bgColor='primary' notes={
`It drove people crazy and nobody knew which one to use.`
	}>
		<BlockQuote>
			<Quote textColor='tertiary'>Flux has become trendy in the past few months, and you’ve seen everyone and their dog roll out their own implementations.</Quote>
			<Cite>Dan Abramov, "The Case for Flux"</Cite>
		</BlockQuote>
	</Slide>,

	<Slide transition={ ['slide'] } bgColor='primary' notes={
`We found out that React.renderToString could be used to quickly render a copy of the DOM on the server and send it to the client for fast page loads.
This is called isomorphic, or universal React.
As we grew more experienced with Flux, we also found that it wasn't as good as we originally thought it was.`
	}>
		<Text textSize='3em' bold textColor='tertiary'>Then, we discovered Isomorphic React.</Text>
		<Appear>
			<Text textSize='3em' bold textColor='tertiary'>...as well as some limitations of vanilla Flux.</Text>
		</Appear>
	</Slide>,

	<Slide transition={ ['slide'] } bgColor='primary' notes={
`Facebook's dispatcher was a singleton.
This meant that you could only effectively run it on the client.
Action Creators passed actions directly to the dispatcher.
This led to redundant code, and made it even less isomorphic.
There was a lot of boilerplate and dependencies involved.
They basically asked you waste time so you could save it in the future.
As applications grew, stores started depending on each other.
This was done in a perplexing and roundabout way that was just plain ugly and locked up people's applications.
Nobody knew how to do async.
This made it even harder.
Even in Facebook's own Flux chat example, they were putting setTimeout hacks everywhere.`
	}>
		<Heading textColor='quaternary'>Weaknesses</Heading>
		<Appear>
			<Text textSize='1.4em' bold textColor='tertiary'>Singleton = Not Isomorphic</Text>
		</Appear>
		<Appear>
			<Text textSize='1.4em' bold textColor='tertiary'>Action Creators import the dispatcher = Not Testable</Text>
		</Appear>
		<Appear>
			<Text textSize='1.4em' bold textColor='tertiary'>Heavy Boilerplate = Bad DX</Text>
		</Appear>
		<Appear>
			<Text textSize='1.4em' bold textColor='tertiary'>Store Dependencies = this.waitFor(Store.dispatchToken) = ???</Text>
		</Appear>
		<Appear>
			<Text textSize='1.4em' bold textColor='tertiary'>Async? Good luck.</Text>
		</Appear>
		<Appear>
			<Text textSize='1.4em' bold textColor='tertiary'>Uncaught Error: Invariant Violation: Dispatch.dispatch(...)</Text>
			<Image src={ dispatchdispatch } />
		</Appear>
	</Slide>
];
