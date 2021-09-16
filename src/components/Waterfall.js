import { Bar } from './Bar';
import PropTypes from 'prop-types';
import { makeRows } from '../makeRows';
import '../css/index.css';

export function Waterfall({ data, maxValue }) {
    const { labelColumns, barData } = makeRows(data, maxValue);

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
                {barData.map((eventData, index) => (
                    <Bar {...eventData} key={index} />
                ))}
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
            color: PropTypes.string
        }).isRequired
    ).isRequired,
    maxValue: PropTypes.number
};
