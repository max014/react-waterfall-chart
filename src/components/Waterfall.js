import { DefaultRow } from './DefaultRow';
import PropTypes from 'prop-types';
import '../css/index.css';

export function Waterfall({ data, maxValue, rowComponent }) {
    const chartStart = Math.min(...data.map(({ start }) => start));
    const chartEnd = maxValue || Math.max(...data.map(({ end }) => end));
    const total = chartEnd - chartStart;

    const Row = rowComponent || DefaultRow;

    return (
        <div className="waterfall-container">
            {data.map((eventData, index) => {
                const beforeBar = Math.min(eventData.start, eventData.end) - chartStart;
                const value = eventData.end ? eventData.end - eventData.start : chartEnd - eventData.start;

                const action = {
                    label: eventData.label,
                    beforeBarPercent: (beforeBar / total) * 100,
                    beforeBar,
                    barLengthPercent: (Math.abs(value) / total) * 100,
                    value,
                    originalData: eventData,
                    index,
                };
                return <Row action={action} key={index} />;
            })}
        </div>
    );
}

Waterfall.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            start: PropTypes.number.isRequired,
            end: PropTypes.number.isRequired,
            color: PropTypes.string,
            displayValue: PropTypes.string,
        }).isRequired
    ).isRequired,
    maxValue: PropTypes.number,
    rowComponent: PropTypes.func,
};
