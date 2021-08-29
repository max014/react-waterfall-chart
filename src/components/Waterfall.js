import { DefaultRow } from './DefaultRow';
import '../css/index.css';

export function Waterfall({ data, RowComponent = DefaultRow }) {
    const now = new Date().getTime();
    const chartStart = Math.min(...data.map(({ start }) => start));
    const chartEnd = Math.max(...data.map(({ end }) => end || now));
    const totalTime = chartEnd - chartStart;

    return (
        <div className="waterfall-container">
            {data.map((rowData, i) => {
                const timeFromStart = rowData.start - chartStart;
                const duration = rowData.end ? rowData.end - rowData.start : chartEnd - rowData.start;
                const spaceFromStart = (timeFromStart / totalTime) * 100;
                const width = (duration / totalTime) * 100;

                const action = {
                    label: rowData.label,
                    spaceFromStart,
                    duration,
                    width,
                    index: i,
                };
                return <RowComponent action={action} key={i} />;
            })}
        </div>
    );
}
