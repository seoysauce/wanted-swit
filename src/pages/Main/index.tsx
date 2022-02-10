import React from 'react';
import { useAppSelector, useAppDispatch } from 'hooks';
import { decrement, increment, selectCount } from 'redux/counterSlice';
import '../../styles/test.scss';

export function Main() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div>
        <button type="button" aria-label="Increment value" onClick={() => dispatch(increment())}>
          +
        </button>
        <span>{count}</span>
        <button type="button" aria-label="Decrement value" onClick={() => dispatch(decrement())}>
          -
        </button>
      </div>
      {/* omit additional rendering output here */}
    </div>
  );
}
