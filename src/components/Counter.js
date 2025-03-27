import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => {
        if (count > 0) setCount(count - 1);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2>Simple Counter</h2>
            <h3>Count: {count}</h3>
            <button onClick={decrement} style={{ marginRight: '10px' }}>-</button>
            <button onClick={increment}>+</button>
        </div>
    );
}

export default Counter;