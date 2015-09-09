import React from 'react/addons';
import { Heading, Slide, Text, Appear, Image, Code, CodePane } from '../../src/spectacle';

import preload from '../../src/utils/preloader';

let images = [require('../assets/hotreload.gif'), require('../assets/devtools.gif')];
preload(images);
let [hotreload, devtools] = images;

export default () => [
	<Slide transition={ ['slide'] } bgColor='black' notes={
`Early 2015, at React.js Conf, Pete Hunt simplified the idea of stores.
He boiled them down to 'a reduce and a change event.'
That means that stores are really just a kind of stateful function that notifies all of its subscribers when the state has changed.
This changed the way a lot of people thought, and spawned a new wave of techniques following the concept.`
	}>
		<Text textSize='3em' bold textColor='tertiary'>January 2015</Text>
		<Appear>
			<Text textSize='3em' bold textColor='tertiary'>@floydophone - Full Stack Flux</Text>
		</Appear>
		<Appear>
			<Text textSize='3em' bold textColor='tertiary'>reduce() + "change" event</Text>
		</Appear>
	</Slide>,

	<Slide transition={ ['slide'] } bgColor='black' notes={
`Redux was among them. At ReactEurope, Dan Abramov introduced Redux to demonstrate React and Flux hot reloading.
Dan realized that stores only needed to manage state, not store them.
So he created functions that instead just take a state and operate on them.
Dan called these stateless stores, which we now call Reducers.
Redux leads the pack for a whole new family of Reactive and Functional Flux implementations.`
	}>
		<Text textSize='3em' bold textColor='tertiary'>June 2015</Text>
		<Appear>
			<Text textSize='3em' bold textColor='tertiary'>@gaearon - Live React: Hot Reloading with Time Travel</Text>
		</Appear>
		<Appear>
			<Text textSize='3em' bold textColor='tertiary'>Cerebral, Nuclear.js, etc.</Text>
			<Text textSize='3em' bold textColor='tertiary'>Alt goes functional (#279)</Text>
		</Appear>
	</Slide>,

	<Slide transition={ ['slide'] } bgColor='black' notes={
`This is a demo of just how awesome hot reloading is.`
	}>
		<Image src={ hotreload } />
	</Slide>,

	<Slide transition={ ['slide'] } bgColor='black' notes={
`And time travel.`
	}>
		<Image src={ devtools } />
	</Slide>,

	<Slide transition={ ['slide'] } bgColor='black' notes={
`The redux hype was crazy.
Everyone scrapped their work and redid everything in redux.
It pretty much became official.
Even the Angular guys are into it.
Meanwhile, I was writing my own Flux implementation.
One part because I wanted to understand Functional Flux more,
one part because I always wanted to write my own implementation,
and one part because I thought I could improve on the ideas of redux.
It looks very much like redux, and my experience with it greatly influences the rest of the talk.`
	}>
		<Text textSize='3em' bold textColor='tertiary'>"stop, drop, and redux"</Text>
		<Appear>
			<Text textSize='3em' bold textColor='tertiary'>gaearon/redux => rackt/redux</Text>
		</Appear>
		<Appear>
			<Text textSize='3em' bold textColor='tertiary'>ng-redux</Text>
		</Appear>
		<Appear>
			<Text textSize='3em' bold textColor='tertiary'>edge/fluxette - 90% redux compatible</Text>
		</Appear>
	</Slide>
];
