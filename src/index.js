import React from 'react';
import ReactDOM from 'react-dom';
import { Waterfall } from './components/Waterfall';

const testData = [
    {
        label: 'precheckReport.v6.post',
        start: 0,
        end: 3,
    },
    {
        label: 'jiraComponentCollector.v3.post',
        start: 3,
        end: 5,
    },
    {
        label: 'fulcrumGrade.v2.post',
        start: 5,
        end: 4,
        color: '#c00',
    },
    {
        label: 'fulcrumGrade.v2.post',
        start: 4,
        end: 8,
    },
    {
        label: 'fulcrumGrade.v2.post',
        start: 8,
        end: 9,
    },
    {
        label: 'fulcrumGrade.v2.post',
        start: 9,
        end: 10,
    },
];

ReactDOM.render(<Waterfall data={testData} max={12} />, document.getElementById('root'));
