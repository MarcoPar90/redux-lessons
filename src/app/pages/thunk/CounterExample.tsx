import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, clear, incrementByAmount, selectCounter } from '../../store/counterStoreSlice/CounterStore';

const CounterExample = () => {
    const dispatch = useDispatch();
    const {count} = useSelector(selectCounter)

    return (
        <section>
            <p>{count}</p>
            <button onClick={()=>dispatch(decrement())}>-</button>
            <button onClick={()=>dispatch(clear())}>reset</button>
            <button onClick={()=>dispatch(increment())}>+</button>
            <button onClick={()=>dispatch(incrementByAmount(5))}>+5</button>
        </section>
    )
}

export default CounterExample