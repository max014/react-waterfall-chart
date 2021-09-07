import { DefaultRow } from './DefaultRow';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

describe('DefaultRow', () => {
    afterEach(() => {
        jest.resetAllMocks();
    });
    it('Should render data', () => {
        // arrange
        const testData = {
            barLengthPercent: 50,
            beforeBar: 0,
            beforeBarPercent: 0,
            index: 0,
            label: 'row 1',
            originalData: { color: '#ccc', displayValue: 'one' },
            value: 1,
        };

        // act
        const { getByText, container } = render(<DefaultRow event={testData} />);
        const bar = container.firstChild.firstChild.nextSibling.firstChild;

        // assert
        expect(getByText(testData.label)).toBeInTheDocument();
        expect(getByText(testData.originalData.displayValue)).toBeInTheDocument();
        expect(bar).toHaveStyle('backgroundColor: #ccc');
        expect(bar).toHaveStyle('marginLeft: 0%');
        expect(bar).toHaveStyle('width: 50%');
    });
});
