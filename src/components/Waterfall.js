import { Row as DefaultRow } from './Row';

export function Waterfall({ data, row = DefaultRow }) {
    const now = new Date().getTime();
    const chartStart = Math.min(...data.map(({ start }) => start));
    const chartEnd = Math.max(...data.map(({ end }) => end || now));
    const totalTime = chartEnd - chartStart;

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            {data.map((rowData, i) => {
                const timeFromStart = rowData.start - chartStart;
                const duration = rowData.end ? rowData.end - rowData.start : chartEnd - rowData.start;
                const spaceFromStart = (timeFromStart / totalTime) * 100;
                const width = (duration / totalTime) * 100;

                const action = {
                    label: rowData.label,
                    duration,
                    spaceFromStart,
                    width,
                    endFromLeft: spaceFromStart + width,
                };
                return (
                    <div key={i} style={{ backgroundColor: i % 2 !== 0 && '#f5f5f5' }}>
                        {row({ action })}
                    </div>
                );
            })}
        </div>
    );
}
