import { Bar } from './Bar';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

describe('Bar', () => {
    it('Should render data', () => {
        // arrange
        const testData = {
            barLengthPercent: 51,
            beforeBarPercent: 0,
            color: '#ccc',
        };

        // act
        const { container } = render(<Bar {...testData} />);
        const bar = container.firstChild.firstChild.firstChild;

        // assert
        expect(bar).toHaveStyle('backgroundColor: #ccc');
        expect(bar).toHaveStyle('marginLeft: 0%');
        expect(bar).toHaveStyle('width: 50%');
    });
});
