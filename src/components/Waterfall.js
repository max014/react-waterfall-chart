import { Bar } from './Bar';
import PropTypes from 'prop-types';
import '../css/index.css';

export function Waterfall({ data, maxValue }) {
    const chartStart = Math.min(...data.map(({ start }) => start));
    const chartEnd = maxValue || Math.max(...data.map(({ end }) => end));
    const total = chartEnd - chartStart;

    const labelCount = Math.max(...data.map((eventData) => eventData.labels.length));
    const labelColumns = Array(labelCount);

    for (let i = 0; i < labelCount; i++) {
        const labelList = [];
        data.forEach((event) => {
            labelList.push(event.labels[i]);
        });
        labelColumns[i] = labelList;
    }

    return (
        <div className="waterfall-container">
            {labelColumns.map((column, i) => (
                <div key={i}>
                    {column.map((label, j) => (
                        <div key={`${label}-${i}-${j}`} className="alternating-rows row-label">
                            {label}
                        </div>
                    ))}
                </div>
            ))}
            <div className="bar-container">
                {data.map((eventData, index) => {
                    const beforeBar = Math.min(eventData.start, eventData.end) - chartStart;
                    const value = eventData.end ? eventData.end - eventData.start : chartEnd - eventData.start;
                    return (
                        <Bar
                            beforeBarPercent={(beforeBar / total) * 100}
                            barLengthPercent={(Math.abs(value) / total) * 100}
                            color={eventData.color}
                            key={index}
                        />
                    );
                })}
            </div>
        </div>
    );
}

Waterfall.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            labels: PropTypes.arrayOf(PropTypes.string),
            start: PropTypes.number.isRequired,
            end: PropTypes.number.isRequired,
            color: PropTypes.string,
        }).isRequired
    ).isRequired,
    maxValue: PropTypes.number,
};
