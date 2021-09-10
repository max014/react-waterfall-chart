import { Waterfall } from './Waterfall';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

describe('Waterfall', () => {
    it('Should render rows', () => {
        // arrange
        const testData = [
            {
                labels: ['row 1'],
                start: 0,
                end: 1,
            },
            {
                labels: ['row 2'],
                start: 1,
                end: 2,
            },
        ];

        // act
        const { getByText } = render(<Waterfall data={testData} />);

        // assert
        expect(getByText(testData[0].labels[0])).toBeInTheDocument();
        expect(getByText(testData[1].labels[0])).toBeInTheDocument();
    });
});
