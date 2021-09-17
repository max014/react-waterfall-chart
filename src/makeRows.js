export function makeRows(data, maxValue) {
    const chartStart = Math.min(...data.map(({ start }) => start));
    const chartEnd = maxValue || Math.max(...data.map(({ end }) => end));
    const total = chartEnd - chartStart;

    const labelCount = Math.max(...data.map((eventData) => eventData.labels.length));
    const labelColumns = Array(labelCount);

    for (let i = 0; i < labelCount; i++) {
        const labelList = [];
        data.forEach((event) => {
            labelList.push(event.labels[i]);
        });
        labelColumns[i] = labelList;
    }

    const barData = data.map((eventData) => {
        const beforeBar = Math.min(eventData.start, eventData.end) - chartStart;
        const value = eventData.end ? eventData.end - eventData.start : chartEnd - eventData.start;
        return {
            beforeBarPercent: (beforeBar / total) * 100,
            barLengthPercent: (Math.abs(value) / total) * 100,
            color: eventData.color
        };
    });

    return { labelColumns, barData };
}
