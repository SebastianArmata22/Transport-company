import { render, fireEvent } from '@testing-library/react';

import AccountPage from './AccountPage';

describe('AccountPage component test', () => {
    it('account to be correct render', () => {  
        const { queryByTitle } = render(<AccountPage />);
        const container = queryByTitle("container");
        
        expect(container).toBeTruthy();
    });
})