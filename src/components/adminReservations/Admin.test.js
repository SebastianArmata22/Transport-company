import { render, fireEvent } from '@testing-library/react';

import AdminReservations from './AdminReservations';

describe('AdminReservations component test', () => {
    it('reservations to be correct render', () => {  
        const { queryByTitle } = render(<AdminReservations />);
        const adminRes = queryByTitle("admin-reservations");
        
        expect(adminRes).toBeTruthy();
    });
})