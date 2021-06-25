import { render, fireEvent } from '@testing-library/react';

import CheckingPage from './CheckingPage';

describe('AdminTickets component test', () => {
    it('ticket to be correct render', () => {  
        const { queryByTitle } = render(<CheckingPage />);
        const checking = queryByTitle("checking");
        
        expect(checking).toBeTruthy();
    });
})