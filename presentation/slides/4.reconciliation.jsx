import React from 'react/addons';
import { Heading, Slide, Text, Appear, Image, Code, CodePane } from '../../src/spectacle';

import preload from '../../src/utils/preloader';

let images = [require('../assets/reactgrowth.jpg')];
preload(images);
let [growth] = images;

let actionCreatorCode =
`let addTodo = text => ({ type: 'ADD_TODO', text: text.trim() }),
    deleteTodo = id => ({ type: 'DELETE_TODO', id }),
    toggleTodo = id => ({ type: 'TOGGLE_TODO', id }),
    editTodo = (id, newText) => ({ type: 'EDIT_TODO', id, text: newText.trim() }),
    clearTodo = () => ({ type: 'CLEAR_TODO' });`;

let reducerUsage =
`let state;
state = todoReducer(state);
// []
state = todoReducer(state, addTodo('Be awesome'));
// [
//     { text: 'Be awesome', id: 0, done: false }
// ]
state = todoReducer(state, addTodo('Conquer the wrorld'));
// [
//     { text: 'Be awesome', id: 0, done: false },
//     { text: 'Conquer the wrorld', id: 1, done: false }
// ]
state = todoReducer(state, editTodo(1, 'Conquer the world'));
// [
//     { text: 'Be awesome', id: 0, done: false },
//     { text: 'Conquer the world', id: 1, done: false }
// ]
state = todoReducer(state, clearTodo())
// []`;

let reducerWithFluxUsage =
`let createFlux = reducer => ({
    dispatch(action) {
        this.state = reducer(this.state, action);
    }
});

let flux = createFlux(todoReducer);
flux.dispatch(addTodo('Be awesome'));
flux.dispatch(addTodo('Conquer the wrorld'));
flux.dispatch(editTodo(1, 'Conquer the world'));
flux.state
// [
//     { text: 'Be awesome', id: 0, done: false },
//     { text: 'Conquer the world', id: 1, done: false }
// ]`;

let reducerCode1 =
`let todoReducer = (state, action) => {
    // ???
    return state;
}`;

let reducerCode2 =
`let nextid = 0;
const initialTodos = [];

let todoReducer = (state = initialTodos, action) => {
    if (action !== undefined) {
        switch (action.type) {
            case 'ADD_TODO':
                state = state.concat({
                    text: action.text,
                    done: false,
                    id: nextid++
                });
                break;
            case 'DELETE_TODO':
                state = state.filter(todo => todo.id !== action.id);
                break;
            case 'TOGGLE_TODO':
                state = state.map(
                    todo => todo.id === action.id
                        ? { ...todo, done: !todo.done }
                        : todo
                );
                break;
            case 'EDIT_TODO':
                state = state.map(
                    todo => todo.id === action.id
                        ? { ...todo, text: action.text }
                        : todo
                );
                break;
            case 'CLEAR_TODO':
                state = [];
                break;
            default:
                break;
        }
    }
    return state;
}`;

let reducerFactoryCode =
`let createReducer = (initialState = {}, reducers = {}) =>
    (state = initialState, action) => {
        if (action !== undefined && action.type in reducers) {
            state = reducers[action.type](state, action);
        }
        return state;
    };`;

let newReducerCode =
`let nextid = 0;
let todoReducer = createReducer([], {
    'ADD_TODO': (todos, { text }) => todos.concat({ text, done: false, id: nextid++ }),
    'DELETE_TODO': (todos, { id }) => todos.filter(todo => todo.id !== id),
    'TOGGLE_TODO': (todos, { id }) => todos.map(todo =>
        todo.id === id ? { ...todo, done: !todo.done } : todo),
    'EDIT_TODO': (todos, { id, text }) => todos.map(todo =>
        todo.id === id ? { ...todo, text } : todo),
    'CLEAR_TODO': () => []
});`

let shapeFactoryCode =
`let createShape = (shape = {}) =>
    (state = {}, action) => {
        let changed = false,
            changes = {};
        for (let i in shape) {
            let last = state[i],
                next = shape[i](last, action);
            if (last !== next) {
                changed = true;
                changes[i] = next;
            }
        }
        return changed ? { ...state, ...changes } : state;
    };

let eShop = createShape({
	cart: cartReducer,
	products: productsReducer
});

let flux = createFlux(eShop);
flux.dispatch(addToCart(/* ... */));
flux.dispatch(refreshProducts(/* ... */));`;

let fluxFactoryCode =
`let createFlux = reducer => ({
    dispatch(action) {
        this.state = reducer(this.state, action);
        for (let listener of this.listeners) {
            listener(this.state);
        }
    },
    listeners: [],
    subscribe(listener) {
        this.listeners.push(listener);
    }
});`;

let finalCode =
`export let createReducer = (initialState = {}, reducers = {}) =>
    (state = initialState, action) => {
        if (action !== undefined && action.type in reducers) {
            state = reducers[action.type](state, action);
        }
        return state;
    };

export let createShape = (shape = {}) =>
    (state = {}, action) => {
        let changed = false,
            changes = {};
        for (let i in shape) {
            let last = state[i],
                next = shape[i](last, action);
            if (last !== next) {
                changed = true;
                changes[i] = next;
            }
        }
        return changed ? { ...state, ...changes } : state;
    };

export let createFlux = reducer => ({
    dispatch(action) {
        this.state = reducer(this.state, action);
        for (let listener of this.listeners) {
            listener(this.state);
        }
    },
    listeners: [],
    subscribe(listener) {
        this.listeners.push(listener);
    }
});`;

export default () => [
	<Slide transition={ ['slide'] } bgColor='black' notes='At React.js Conf, Pete Hunt simplified the idea of stores: A reduce and a change event. This changed the way a lot of people think. It spawned a whole new wave of Flux implementations, following this concept.'>
		<Text textSize='3em' bold textColor='tertiary'>January 2015</Text>
		<Appear fid='1'>
			<Text textSize='3em' bold textColor='tertiary'>@floydophone - Full Stack Flux</Text>
		</Appear>
		<Appear fid='2'>
			<Text textSize='3em' bold textColor='tertiary'>reduce() + "change" event</Text>
		</Appear>
	</Slide>,

	<Slide transition={ ['slide'] } bgColor='black' notes='At ReactEurope, Dan Abramov introduces Redux to demonstrate React and Flux hot reloading. Dan realized that stores just manage state, not store them. So he created functions that take a state and operate on them. Dan called them stateless stores.'>
		<Text textSize='3em' bold textColor='tertiary'>June 2015</Text>
		<Appear fid='1'>
			<Text textSize='3em' bold textColor='tertiary'>@gaearon - Live React: Hot Reloading with Time Travel</Text>
		</Appear>
		<Appear fid='2'>
			<Text textSize='3em' bold textColor='tertiary'>wow such redux</Text>
		</Appear>
	</Slide>,

	<Slide transition={ ['slide'] } bgColor='primary' notes='Redux leads the pack for a whole new family of Functional Flux implementations. Action Creators are now just pure functions returning Action objects. Stores take a state and an action, and return a new state. We call them Reducers now. Functional Flux basically abuses the concept of stores being pure functions that reduce actions into the state.'>
		<Heading size={ 1 } fit textColor='secondary'>Functional Flux</Heading>
		<Appear fid='1'>
			<Text textSize='3em' bold textColor='tertiary'>Action Creators are pure functions</Text>
		</Appear>
		<Appear fid='2'>
			<Code textSize='3em' textColor='tertiary'>State = Store(State, Action)</Code>
		</Appear>
		<Appear fid='3'>
			<Text textSize='3em' bold textColor='tertiary'>Stateless Stores => Reducers</Text>
		</Appear>
	</Slide>,

	<Slide transition={ ['slide'] } bgColor='primary' notes='Action creators are now really easy. We will write our own miniature Flux implementation, because it will give us a greater understanding of Functional Flux.'>
		<Heading size={ 1 }>Action Creators</Heading>
		<CodePane
			lang='javascript'
			source={ actionCreatorCode }
			margin='20px auto'/>
		<Appear fid='1'>
			<Text textSize='3em' bold textColor='tertiary'>Let's write our own Flux implementation.</Text>
		</Appear>
	</Slide>,

	<Slide transition={ ['slide'] } bgColor='primary' notes='Before we write the reducer, we should describe how it works.'>
		<CodePane
			lang='javascript'
			source={ reducerUsage }
			margin='20px auto'/>
	</Slide>,

	<Slide transition={ ['slide'] } bgColor='primary' notes='Let us abstract some of that out. There, we have the beginnings of a Flux implementation!'>
		<CodePane
			lang='javascript'
			source={ reducerWithFluxUsage }
			margin='20px auto'/>
	</Slide>,

	<Slide transition={ ['slide'] } bgColor='primary' notes='What about the reducer?'>
		<Heading size={ 1 }>Reducers?</Heading>
		<CodePane
			lang='javascript'
			source={ reducerCode1 }
			margin='20px auto'/>
		<Appear fid='1'>
			<Text textSize='3em' bold textColor='tertiary'>Take a deep breath.</Text>
		</Appear>
	</Slide>,

	<Slide transition={ ['slide'] } bgColor='primary' notes='Clearly, not as pretty. But we can fix that. For now, let us go over this reducer.'>
		<CodePane
			lang='javascript'
			source={ reducerCode2 }/>
	</Slide>,

	<Slide transition={ ['slide'] } bgColor='primary' notes='That was terrible. So let us write a reducer creator. Now we can succinctly describe our initial state, and exactly what action type maps to which subreducer.'>
		<Text textSize='3em' bold textColor='tertiary'>Boilerplate sucks.</Text>
		<Appear fid='1'>
			<CodePane
				lang='javascript'
				source={ reducerFactoryCode }/>
		</Appear>
		<Appear fid='1'>
			<CodePane
				lang='javascript'
				source={ newReducerCode }
				margin='20px auto'/>
		</Appear>
	</Slide>,

	<Slide transition={ ['slide'] } bgColor='primary' notes='Did I say subreducer?'>
		<Heading size={ 1 }>Subreducers</Heading>
		<Appear fid='1'>
			<Text textSize='3em' bold textColor='tertiary'>We can combine and compose reducers to make more advanced ones.</Text>
		</Appear>
	</Slide>,

	<Slide transition={ ['slide'] } bgColor='primary' notes='We need a way to structure our state as it grows.'>
		<Text textSize='3em' bold textColor='tertiary'>Structuring the state</Text>
		<Appear fid='1'>
			<CodePane
				lang='javascript'
				source={ shapeFactoryCode }/>
		</Appear>
	</Slide>,

	<Slide transition={ ['slide'] } bgColor='primary' notes='We have a Flux object, and two functions to help create reducers for us. All we have left is to have a way to attach listeners and call them when the state changes.'>
		<Text textSize='3em' bold textColor='tertiary'>createFlux, createReducer, createShape</Text>
		<Appear fid='1'>
			<Text textSize='3em' bold textColor='tertiary'>Almost there.</Text>
		</Appear>
	</Slide>,

	<Slide transition={ ['slide'] } bgColor='primary' notes='We have a Flux object, and two functions to help create reducers for us. All we have left is to have a way to attach listeners and call them when the state changes.'>
		<CodePane
			lang='javascript'
			source={ fluxFactoryCode }/>
		<Appear fid='1'>
			<Text textSize='3em' bold textColor='tertiary'>That was easy.</Text>
		</Appear>
	</Slide>,

	<Slide transition={ ['slide'] } bgColor='primary' notes='This is our mini Functional Flux implementation. No dependencies. Of course, there are optimizations to make and features to add, like middleware and React integration, but this is the gist of it.'>
		<CodePane
			lang='javascript'
			source={ finalCode }/>
	</Slide>
];
