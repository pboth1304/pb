import { render } from '@testing-library/react';

import FeatureLevelGenerator from './feature-level-generator';

describe('FeatureLevelGenerator', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<FeatureLevelGenerator />);
        expect(baseElement).toBeTruthy();
    });
});
