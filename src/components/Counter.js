import React, { useState } from 'react';

function Counter({ count }) { //Accept count from props
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2>Completed Todos</h2>
            <h3>{count}</h3> {/* Display passed count */}
        </div>
    );
}

export default Counter;