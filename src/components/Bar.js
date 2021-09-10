import PropTypes from 'prop-types';

export function Bar({ beforeBarPercent, barLengthPercent, color }) {
    return (
        <div className="row alternating-rows">
            <div className="row-bar-container">
                <div
                    className="row-bar"
                    style={{
                        backgroundColor: color,
                        marginLeft: beforeBarPercent + '%',
                        width: barLengthPercent + '%',
                    }}
                ></div>
            </div>
        </div>
    );
}

Bar.propTypes = {
    beforeBarPercent: PropTypes.number.isRequired,
    barLengthPercent: PropTypes.number.isRequired,
    color: PropTypes.string,
};
