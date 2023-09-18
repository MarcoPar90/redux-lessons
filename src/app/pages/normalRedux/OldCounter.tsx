import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectOldCounter } from '../../store/normalCounter/coutner.selector';
import { decrement, increment, clear } from '../../store/normalCounter/conunter.actions';

const OldCounter = () => {

    const dispatch = useDispatch();
    const count = useSelector(selectOldCounter)

    return (
        <section>
            <p>{count}</p>
            <button onClick={()=>dispatch(decrement(1))}>-</button>
            <button onClick={()=>dispatch(clear())}>reset</button>
            <button onClick={()=>dispatch(increment(1))}>+</button>
        </section>
    )
}

export default OldCounter