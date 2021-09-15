import ReactDOM from 'react-dom';
import { Waterfall } from './components/Waterfall';

const testData = [
    {
        labels: ['step 1'],
        start: 0,
        end: 3
    },
    {
        labels: ['step 2'],
        start: 3,
        end: 5
    },
    {
        labels: ['step 3'],
        start: 5,
        end: 4,
        color: '#c00'
    },
    {
        labels: ['step 4'],
        start: 4,
        end: 8
    },
    {
        labels: ['step 5', 'asdf'],
        start: 8,
        end: 9
    },
    {
        labels: ['step 6', '', 'gfdsgsf'],
        start: 9,
        end: 10,
        color: 'green'
    }
];

ReactDOM.render(<Waterfall data={testData} />, document.getElementById('root'));
