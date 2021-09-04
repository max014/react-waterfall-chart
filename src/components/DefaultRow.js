import PropTypes from 'prop-types';

export function DefaultRow({ action }) {
    return (
        <div className="default-row">
            <div className="default-row-label">{action.label}</div>
            <div className="default-row-bar-container">
                <div
                    className="default-row-bar"
                    style={{
                        backgroundColor: action.originalData.color,
                        marginLeft: action.beforeBarPercent + '%',
                        width: action.barLengthPercent + '%',
                    }}
                ></div>
                {action.originalData.displayValue && <div>{action.originalData.displayValue}</div>}
            </div>
        </div>
    );
}

DefaultRow.propTypes = {
    action: PropTypes.object.isRequired,
};
