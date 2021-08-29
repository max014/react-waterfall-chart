export function DefaultRow({ action }) {
    return (
        <div className="default-row">
            <div className="default-row-label">{action.label}</div>
            <div className="default-row-bar-container">
                <div
                    className="default-row-bar"
                    style={{
                        marginLeft: action.spaceFromStart + '%',
                        width: action.width + '%',
                    }}
                ></div>
                <div>{action.duration}ms</div>
            </div>
        </div>
    );
}
