/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */


import React from 'react';
import { useSelector, useDispatch } from "react-redux";


import { decrement, decrementBy, increment, incrementBy } from '../../state/slices/CounterSlice';

function Counter() {

  const { counter } = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  return (

    <div>
      <h1>Hello Redux Toolkit</h1>
      <h3>Count is: {counter}</h3>
      <button type='button' onClick={() => dispatch(increment())}>
        Increment 1
      </button>
      <button type='button' onClick={() => dispatch(decrement())}>
        Decrement 1
      </button>
      <button type='button' onClick={() => dispatch(incrementBy(2))}>
        Increment by 2
      </button>
      <button type='button' onClick={() => dispatch(decrementBy(2))}>
        Decrement by 2
      </button>
    </div>

  )

}

export default Counter;


