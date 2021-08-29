import React from 'react';
import ReactDOM from 'react-dom';
import { Waterfall } from './components/Waterfall';

const testData = [
    {
        label: 'precheckReport.v6.post',
        start: 1629386193393,
        end: 1629386215211,
    },
    {
        label: 'jiraComponentCollector.v3.post',
        start: 1629386193396,
        end: 1629386205688,
    },
    {
        label: 'fulcrumGrade.v2.post',
        start: 1629386208228,
        end: 1629386208228,
    },
    {
        label: 'fulcrumGrade.v2.post',
        start: 1629386208229,
        end: 1629386208229,
    },
    {
        label: 'fulcrumGrade.v2.post',
        start: 1629386208263,
        end: 1629386208271,
    },
    {
        label: 'fulcrumGrade.v2.post',
        start: 1629386208530,
        end: 1629386208530,
    },
];

ReactDOM.render(<Waterfall data={testData} />, document.getElementById('root'));
