import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {
    selectName
} from './nameSlice';

export function Name() {
    const name = useSelector(selectName);
    const [nameDemo, setDemo] = useState('Name : Demo');

    return (
        <div>
            <h1>{nameDemo}</h1>
            <h1>Global Name : {name}</h1>
        </div>
    )
}