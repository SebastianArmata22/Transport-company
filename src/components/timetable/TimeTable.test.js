import { render, fireEvent } from '@testing-library/react';

import TimeTable from './TimeTable';

describe('TimeTable component test', () => {
    it('timetable page to be correct render', () => {  
        const { queryByTitle } = render(<TimeTable />);
        const timeTable = queryByTitle("timeTable");
        
        expect(timeTable).toBeTruthy();
    });
})