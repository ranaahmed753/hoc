import React from 'react';
import withProcess from './withProcess';

const Counter = (props) => {
    const { count, handleCount } = props
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleCount}>Click {count} times</button>
        </div>
    );
};

export default withProcess(Counter);