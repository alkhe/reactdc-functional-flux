import React from 'react/addons';
import { Heading, Slide, Text, Appear, Image, Code, CodePane } from '../../src/spectacle';

let futureCode =
`let a = 5;
var a = 5; // but safer

let { id } = thing;
var id = thing.id;

let add1 = x => x + 1;
var add1 = function(x) { return x + 1; };

let process = (a, b = a, { c }) => { doSomething(a, b, c); };
var process = function(a, b, x) {
    if (b === undefined) {
        b = a;
    }
    var c = x.c;
    doSomething(a, b, c);
};

let obj = { x };
var obj = { x: x };

let car = { drive() { console.log('vroom'); } };
var car = { drive: function() { console.log('vroom'); } };

x = { ...x, value: 3 };
x = _.clone(x); x.value = 3;

arr = [val, ...arr];
arr = [val].concat(arr);

let log = ::console.log;
var log = console.log.bind(console);`;

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
//     { text: 'Be awesome', done: false, id: 'Zs2c33' }
// ]
state = todoReducer(state, toggleTodo('Zs2c33'));
// [
//     { text: 'Be awesome', done: true, id: 'Zs2c33' }
// ]
state = todoReducer(state, addTodo('Conquer the wrorld'));
// [
//     { text: 'Be awesome', done: true, id: 'Zs2c33' },
//     { text: 'Conquer the wrorld', done: false, id: '89hrWi' }
// ]
state = todoReducer(state, editTodo(1, 'Conquer the world'));
// [
//     { text: 'Be awesome', done: true, id: 'Zs2c33' },
//     { text: 'Conquer the world', done: false, id: '89hrWi' }
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
flux.dispatch(toggleTodo('Zs2c33'));
flux.dispatch(addTodo('Conquer the wrorld'));
flux.dispatch(editTodo('89hrWi', 'Conquer the world'));
flux.state
// [
//     { text: 'Be awesome', done: true, id: 'Zs2c33' },
//     { text: 'Conquer the world', done: false, id: '89hrWi' }
// ]`;

let reducerCode1 =
`let todoReducer = (state, action) => {
    // ???
    return state;
}`;

let reducerCode2 =
`const initialTodos = [];

let todoReducer = (state = initialTodos, action = {}) => {
    switch (action.type) {
        case 'ADD_TODO':
            return state.concat({
                text: action.text,
                done: false,
                id: uniqueID()
            });
        case 'DELETE_TODO':
            return state.filter(todo => todo.id !== action.id);
        case 'TOGGLE_TODO':
            return state.map(
                todo => todo.id === action.id
                    ? { ...todo, done: !todo.done }
                    : todo
            );
        case 'EDIT_TODO':
            return state.map(
                todo => todo.id === action.id
                    ? { ...todo, text: action.text }
                    : todo
            );
        case 'CLEAR_TODO':
        default:
            return initialTodos;
    }
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
`let todoReducer = createReducer([], {
    'ADD_TODO': (todos, { text }) => todos.concat({ text, done: false, id: uniqueID() }),
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
        for (let i in shape) {
            let last = state[i],
                next = shape[i](last, action);
            if (last !== next) {
                state = { ...state, [i]: next };
            }
        }
        return state;
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
});

// flux.subscribe(::this.setState)`;

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
        for (let i in shape) {
            let last = state[i],
                next = shape[i](last, action);
            if (last !== next) {
                state = { ...state, [i]: next };
            }
        }
        return state;
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

let fluxetteExample =
`import React from 'react';
import Flux from 'fluxette';
import { Context, connect } from 'fluxette-react'
import Leaf from 'reducer/leaf';

let UPDATE_TEXT = 'UPDATE_TEXT';
let updateAction = value => ({ type: UPDATE_TEXT, value });

let flux = Flux( // this is createFlux
    Leaf('', { // this is createReducer
        [UPDATE_TEXT]: (state, action) => action.value
    })
);

@connect(state => ({ text: state })) // this takes care of subscribing
class Updater extends React.Component {
    change(e) {
        this.dispatch(updateAction(e.target.value));
    }
    render() {
        return (
            <div>
                <input onChange={ ::this.change } />
                <div>{ this.state.text }</div>
            </div>
        );
    }
}

React.render( // this makes flux accessible to @connect
    <Context flux={ flux }>
        { () => <Updater /> }
    </Context>,
    document.getElementById('root')
);`;

export default () => [
	<Slide transition={ ['slide'] } bgColor='primary' notes={
`In Functional Flux, Action Creators are now just pure functions returning Action objects.
Reducers take a state and an action, and return a new state.
Functional Flux abuses the concept of pure functions that reduce actions into the state.`
    }>
		<Heading size={ 1 } fit textColor='secondary'>Functional Flux</Heading>
		<Appear>
			<Text textSize='3em' bold textColor='tertiary'>Action Creators are pure functions</Text>
		</Appear>
		<Appear>
			<Text textSize='3em' bold textColor='tertiary'>Reducers are pure functions</Text>
		</Appear>
		<Appear>
			<Code textSize='3em' textColor='tertiary'>State = Reducer(State, Action)</Code>
		</Appear>
	</Slide>,

	<Slide transition={ ['slide'] } bgColor='primary' notes={
`Now comes the code. Many people use ES6 and ES7 features nowadays, so I'll go over some important ones, along with their approximate ES5 equivalents.`
	}>
		<CodePane
			lang='javascript'
			source={ futureCode }
			margin='20px auto'/>
	</Slide>,

	<Slide transition={ ['slide'] } bgColor='primary' notes={
`Action creators are really easy now.
We'll write our own miniature Functional Flux implementation, because it'll give us a greater understanding of how it works.`
	}>
		<Heading size={ 1 }>Action Creators</Heading>
		<CodePane
			lang='javascript'
			source={ actionCreatorCode }
			margin='20px auto'/>
		<Appear>
			<Text textSize='3em' bold textColor='tertiary'>Let's write our own Flux implementation.</Text>
		</Appear>
	</Slide>,

	<Slide transition={ ['slide'] } bgColor='primary' notes={
`Before we write the actual reducer, let's describe we want it to work.`
	}>
		<CodePane
			lang='javascript'
			source={ reducerUsage }
			margin='20px auto'/>
	</Slide>,

	<Slide transition={ ['slide'] } bgColor='primary' notes={
`Let's abstract some of that stuff out.
We have the beginnings of a Flux implementation!`
	}>
		<CodePane
			lang='javascript'
			source={ reducerWithFluxUsage }
			margin='20px auto'/>
	</Slide>,

	<Slide transition={ ['slide'] } bgColor='primary' notes={
`Now, we get to the reducer.`
	}>
		<Heading size={ 1 }>Reducers?</Heading>
		<CodePane
			lang='javascript'
			source={ reducerCode1 }
			margin='20px auto'/>
		<Appear>
			<Text textSize='3em' bold textColor='tertiary'>Take a deep breath.</Text>
		</Appear>
	</Slide>,

	<Slide transition={ ['slide'] } bgColor='primary' notes={
`Clearly, it's not as pretty.
But we can fix that.
For now, let's go over it.`
	}>
		<CodePane
			lang='javascript'
			source={ reducerCode2 }/>
	</Slide>,

	<Slide transition={ ['slide'] } bgColor='primary' notes={
`That was terrible.
So instead, let's write a reducer creator.
Now we can succinctly describe our initial state and exactly which action type maps to what subreducer.`
	}>
		<Text textSize='3em' bold textColor='tertiary'>Boilerplate sucks.</Text>
		<Appear>
			<CodePane
				lang='javascript'
				source={ reducerFactoryCode }/>
		</Appear>
		<Appear>
			<CodePane
				lang='javascript'
				source={ newReducerCode }
				margin='20px auto'/>
		</Appear>
	</Slide>,

	<Slide transition={ ['slide'] } bgColor='primary' notes={
`Did I say subreducer?
We know that Reducers take a state and an action, and return another state.
We can take advantage of this by composing many different kinds of reducers, each with its own purpose.`
    }>
		<Heading size={ 1 }>Subreducers</Heading>
		<Appear>
			<Text textSize='3em' bold textColor='tertiary'>We can combine and compose reducers to make more advanced ones.</Text>
		</Appear>
	</Slide>,

	<Slide transition={ ['slide'] } bgColor='primary' notes={
`For example, we need a way to structure our state as it grows.`
    }>
		<Text textSize='3em' bold textColor='tertiary'>Structuring the state</Text>
		<Appear>
			<CodePane
				lang='javascript'
				source={ shapeFactoryCode }/>
		</Appear>
	</Slide>,

	<Slide transition={ ['slide'] } bgColor='primary' notes={
`We have a Flux object, and two functions to help create reducers for us.
All we need now is to find a way to attach listeners and call them when the state changes.`
    }>
		<Text textSize='3em' bold textColor='tertiary'>createFlux, createReducer, createShape</Text>
		<Appear>
			<Text textSize='3em' bold textColor='tertiary'>Almost there.</Text>
		</Appear>
	</Slide>,

	<Slide transition={ ['slide'] } bgColor='primary' notes={
`Simple.`
    }>
		<CodePane
			lang='javascript'
			source={ fluxFactoryCode }/>
		<Appear>
			<Text textSize='3em' bold textColor='tertiary'>That was easy.</Text>
		</Appear>
	</Slide>,

	<Slide transition={ ['slide'] } bgColor='primary' notes={
`This is our mini Functional Flux implementation.
Thirty lines.
No dependencies.
Of course, there are optimizations to make and features to add, like middleware and React integration, but this, in essence, is a Functional Flux implementation.`
	}>
		<CodePane
			lang='javascript'
			source={ finalCode }/>
	</Slide>,

	<Slide transition={ ['slide'] } bgColor='primary' notes={
`And since wouldn't be ReactDC without React, I'll show you an example.
Some things should look pretty familiar.`
	}>
		<CodePane
			lang='javascript'
			source={ fluxetteExample }/>
	</Slide>,

    <Slide transition={ ['slide'] } bgColor='primary' notes={
`In a nutshell, Functional Flux has three responsibilities:
keeping a reference to your reducer,
keeping a reference to your listeners,
and calling your reducer and listeners when you dispatch.`
	}>
		<Text textSize='3em' bold textColor='tertiary'>Functional Flux in a nutshell</Text>
		<Appear>
			<Text textSize='3em' textColor='tertiary'>flux = createFlux(rootReducer)</Text>
		</Appear>
		<Appear>
			<Text textSize='3em' textColor='tertiary'>flux.subscribe(setState)</Text>
		</Appear>
		<Appear>
			<Text textSize='3em' textColor='tertiary'>flux.dispatch(someAction)</Text>
		</Appear>
	</Slide>
]
