import { render, fireEvent } from '@testing-library/react';

import Login from './Login';

describe('Login component test', () => {
    it('login page to be correct render', () => {  
        const { queryByTitle } = render(<Login />);
        const login = queryByTitle("login");
        
        expect(login).toBeTruthy();
    });
})