import { render, fireEvent } from '@testing-library/react';

import NavbarHome from './NavbarHome';

describe('Login component test', () => {
    it('login page to be correct render', () => {  
        const { queryByTitle } = render(<NavbarHome />);
        const navHome = queryByTitle("navbarHome");
        
        expect(navHome).toBeTruthy();
    });
})