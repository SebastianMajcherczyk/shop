import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../store/counterSlice';

export const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter.counter);
	const [inputValue, setInputValue] = useState(0);
	return (
		<div>
			<h1>Counter: {counter}</h1>
			<button onClick={() => dispatch(increment())}>Increment</button>
			<button onClick={() => dispatch(decrement())}>Decrement</button>
			<button onClick={() => dispatch(incrementByAmount(inputValue))}>
				Increment by amount
			</button>
            <input type='number' value={inputValue} onChange={e => setInputValue(+e.target.value)} />
		</div>
	);
};
