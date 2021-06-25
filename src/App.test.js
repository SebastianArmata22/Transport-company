import { render, fireEvent } from '@testing-library/react';

import App from './App';

it('App to be correct render', () => {  
    const { queryByTitle } = render(<App />);
    const app = queryByTitle("App");

    expect(app).toBeTruthy();
});