import { render, fireEvent } from '@testing-library/react';

import Journeys from './Journeys';

describe('Journeys component test', () => {
    it('journeys page to be correct render', () => {  
        const { queryByTitle } = render(<Journeys />);
        const journeys = queryByTitle("journeys");
        
        expect(journeys).toBeTruthy();
    });
})