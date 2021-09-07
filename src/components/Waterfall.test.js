import { Waterfall } from './Waterfall';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

describe('Waterfall', () => {
    afterEach(() => {
        jest.resetAllMocks();
    });
    it('Should render rows', () => {
        // arrange
        const testData = [
            {
                label: 'row 1',
                start: 0,
                end: 1,
            },
            {
                label: 'row 2',
                start: 1,
                end: 2,
            },
        ];

        // act
        const { getByText } = render(<Waterfall data={testData} />);

        // assert
        expect(getByText(testData[0].label)).toBeInTheDocument();
        expect(getByText(testData[1].label)).toBeInTheDocument();
    });

    it('Should pass the correct data to rowComponent', () => {
        // arrange
        const Row = jest.fn(() => null);
        const testData = [
            {
                label: 'row 1',
                start: 0,
                end: 1,
            },
            {
                label: 'row 2',
                start: 1,
                end: 2,
            },
        ];

        // act
        render(<Waterfall data={testData} rowComponent={Row} />);

        // assert
        expect(Row).toHaveBeenCalledWith(
            {
                event: {
                    barLengthPercent: 50,
                    beforeBar: 0,
                    beforeBarPercent: 0,
                    index: 0,
                    label: 'row 1',
                    originalData: testData[0],
                    value: 1,
                },
            },
            {}
        );
        expect(Row).toHaveBeenCalledWith(
            {
                event: {
                    barLengthPercent: 50,
                    beforeBar: 1,
                    beforeBarPercent: 50,
                    index: 1,
                    label: 'row 2',
                    originalData: testData[1],
                    value: 1,
                },
            },
            {}
        );
    });
});
