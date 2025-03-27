import React, { useState } from 'react';

function TextInput() {
    const [text, setText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2>Text Input</h2>
            <input
                type="text"
                value={text}
                onChange={handleChange}
                placeholder="Type something..."
                style={{ padding: '8px', width: '200px' }}
            />
            <p style={{ marginTop: '20px' }}>
                You typed: <strong>{text}</strong>
            </p>
        </div>
    );
}

export default TextInput;