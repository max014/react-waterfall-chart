import { DefaultRow } from './DefaultRow';
import PropTypes from 'prop-types';
import '../css/index.css';

export function Waterfall({ data, max, units = '', rowComponent }) {
    const chartStart = Math.min(...data.map(({ start }) => start));
    const chartEnd = max || Math.max(...data.map(({ end }) => end));
    const total = chartEnd - chartStart;

    const Row = rowComponent || DefaultRow;

    return (
        <div className="waterfall-container">
            {data.map((rowData, index) => {
                const unitsFromStart = Math.min(rowData.start, rowData.end) - chartStart;
                const value = rowData.end ? rowData.end - rowData.start : chartEnd - rowData.start;

                const action = {
                    label: rowData.label,
                    startAt: {
                        percentage: (unitsFromStart / total) * 100,
                        unitsFromStart,
                    },
                    value: {
                        percentage: (Math.abs(value) / total) * 100,
                        absolute: value,
                    },
                    rowData,
                    index,
                };
                return <Row action={action} units={units} key={index} />;
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
        }).isRequired
    ).isRequired,
    max: PropTypes.number,
    units: PropTypes.string,
    rowComponent: PropTypes.func,
};
