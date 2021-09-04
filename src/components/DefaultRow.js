import PropTypes from 'prop-types';

export function DefaultRow({ event }) {
    return (
        <div className="default-row">
            <div className="default-row-label">{event.label}</div>
            <div className="default-row-bar-container">
                <div
                    className="default-row-bar"
                    style={{
                        backgroundColor: event.originalData.color,
                        marginLeft: event.beforeBarPercent + '%',
                        width: event.barLengthPercent + '%',
                    }}
                ></div>
                {event.originalData.displayValue && <div>{event.originalData.displayValue}</div>}
            </div>
        </div>
    );
}

DefaultRow.propTypes = {
    event: PropTypes.object.isRequired,
};
