import { render, fireEvent } from '@testing-library/react';

import BoughtTickets from './BoughtTickets';

describe('AdminTickets component test', () => {
    it('ticket to be correct render', () => {  
        const { queryByTitle } = render(<BoughtTickets />);
        const ticket = queryByTitle("boughtTickets");
        
        expect(ticket).toBeTruthy();
    });
})