import { render, fireEvent } from '@testing-library/react';

import ContactPage from './Contactpage';

describe('ContactPage component test', () => {
    it('contact page to be correct render', () => {  
        const { queryByTitle } = render(<ContactPage />);
        const contact = queryByTitle("contactPage");
        
        expect(contact).toBeTruthy();
    });
})