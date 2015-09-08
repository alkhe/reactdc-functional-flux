import React from 'react/addons';
import { Heading, Slide, Text, Appear, Image, Code, CodePane } from '../../src/spectacle';

export default () => (
	<Slide transition={ ['slide'] } bgColor='quaternary'>
		<Heading size={ 1 } fit >
			Made with ♥ in Washington, D.C.
		</Heading>
		<Heading size={ 1 } fit caps >
			Thank you
		</Heading>
	</Slide>
)
