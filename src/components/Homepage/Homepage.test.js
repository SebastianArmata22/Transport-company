import { render, fireEvent } from '@testing-library/react';

import Homepage from './Homepage';

describe('Homepage component test', () => {
    it('home page to be correct render', () => {  
        const { queryByTitle } = render(<Homepage />);
        const homePage = queryByTitle("homePage");
        
        expect(homePage).toBeTruthy();
    });
})