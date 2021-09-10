# React-Waterfall-Chart

An easy to use React component for creating waterfall charts.

# Installation and usage

The easiest way to use react-waterfall-chart is to install it from npm.

    npm install --save react-waterfall-chart

Then use it in your app.

```js
import { Waterfall } from 'react-waterfall-chart';

const data = [
    {
        labels: ['step 1'],
        start: 0,
        end: 3,
    },
    {
        labels: ['step 2'],
        start: 3,
        end: 9,
    },
    {
        labels: ['step 3'],
        start: 9,
        end: 10,
    },
];

function App() {
    return <Waterfall data={data} />;
}
```

## Props

-   `data` - Required. An array of objects representing each row in the chart. Each object requires `start`, and `end` values, and can also accept an array of `labels` and a string for `color`.
-   `maxValue` - Optional. Define the maximum value of your chart. Without `maxValue` the highest `end` in the provided data will be used.
