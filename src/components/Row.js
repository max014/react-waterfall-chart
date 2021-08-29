export function Row({ action }) {
    return (
        <div style={{ display: 'flex', height: '40px' }}>
            <div style={{ width: '30%', borderRight: '1px solid #d5d5d5' }}>{action.label}</div>

            <div
                style={{
                    position: 'relative',
                    width: '60%',
                    margin: '5px 0',
                }}
            >
                <div
                    style={{
                        height: '100%',
                        top: '0',
                        backgroundColor: '#22a7f0',
                        position: 'absolute',
                        left: action.spaceFromStart + '%',
                        width: action.width + '%',
                        minWidth: '2px',
                    }}
                ></div>
                <div style={{ position: 'absolute', left: action.endFromLeft + '%' }}>{action.duration}ms</div>
            </div>
        </div>
    );
}
