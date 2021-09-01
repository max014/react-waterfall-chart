import PropTypes from 'prop-types';

export function DefaultRow({ action, units }) {
    return (
        <div className="default-row">
            <div className="default-row-label">{action.label}</div>
            <div className="default-row-bar-container">
                <div
                    className="default-row-bar"
                    style={{
                        backgroundColor: action.rowData.color,
                        marginLeft: action.startAt.percentage + '%',
                        width: action.value.percentage + '%',
                    }}
                ></div>
                <div>
                    {action.value.absolute}
                    {units}
                </div>
            </div>
        </div>
    );
}

DefaultRow.propTypes = {
    action: PropTypes.object.isRequired,
    units: PropTypes.string,
};
