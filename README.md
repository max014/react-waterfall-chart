# React-Waterfall-Chart

An easy to use React component for creating waterfall charts.

# Installation and usage

The easiest way to use react-waterfall-chart is to install it from npm.

    npm install --save react-waterfall-chart

Then use it in your app.

    import { Waterfall } from 'react-waterfall-chart';

    const data = [
        {
            label: 'step 1',
            start: 0,
            end: 3
        },
        {
            label: 'step 2',
            start: 3,
            end: 9
        },
        {
            label: 'step 3',
            start: 9,
            end: 10
        },
    ];

    function App() {
        return <Waterfall data={data} />
    }

## Props

-   `data` - Required. An array of objects representing each row in the chart. Each object requires `label`, `start`, and `end`. The default row component can also make use of `color`, and `displayValue`.
-   `maxValue` - Optional. Define the maximum value of your chart. Without `maxValue` the highest `end` in the provided data will be used.
-   `rowComponent` - Optional. Provide your own React component to use for each row.

## Using a Custom Row Component

The component provided to `rowComponent` should accept an `event` prop that is an object representing each event in the chart.

    const event = {
        label,
        beforeBarPercent,
        beforeBar,
        barLengthPercent,
        value,
        originalData,
        index,
    };
