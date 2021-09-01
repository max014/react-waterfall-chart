import React from 'react';
import ReactDOM from 'react-dom';
import { Waterfall } from '../dist/index';

const testData = [
    {
        label: 'step 1',
        start: 0,
        end: 3,
    },
    {
        label: 'step 2',
        start: 3,
        end: 5,
    },
    {
        label: 'step 3',
        start: 5,
        end: 4,
        color: '#c00',
    },
    {
        label: 'step 4',
        start: 4,
        end: 8,
    },
    {
        label: 'step 5',
        start: 8,
        end: 9,
    },
    {
        label: 'step 6',
        start: 9,
        end: 10,
    },
];

ReactDOM.render(<Waterfall data={testData} max={12} />, document.getElementById('root'));
