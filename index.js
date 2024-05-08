import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
const data = [
    { name: 'John' },
    { name: 'Jane' },
    { name: 'Bob' }
];

const names = data.map(item => item.name);
console.log(names);
const MarkdownEditor = () => {
    const [markdown, setMarkdown] = useState('type markdown here');

    const handleMarkdownChange = (event) => {
        setMarkdown(event.target.value);
    };

    return (
        <div>
            <textarea value={markdown} onChange={handleMarkdownChange} />
            <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
    );
};

export default MarkdownEditor;

// take a sentence as input
// reverse the input sentence
// the start of the sentence must start with a capital
// for javascript