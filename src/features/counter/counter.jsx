import React from 'react';
import {increment, decrement, reset} from "./counterSlice";
import {useSelector, useDispatch} from "react-redux";

const Counter = ()=>{
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
    return(
        <div>
            <button onClick={()=> dispatch(increment())}>Increment</button>
            <span>{count}</span>
            <button onClick={()=> dispatch(decrement())}>Decrement</button>
            <button onClick={()=> dispatch(reset())}>Reset</button>
        </div>
    );
};
export default Counter;