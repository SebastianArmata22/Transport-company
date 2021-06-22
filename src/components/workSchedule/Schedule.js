import React from 'react';
import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-react-schedule';

const schedule = () => {

    return (
      <div className="card-body">
        <ScheduleComponent currentView='Month'>
          <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
        </ScheduleComponent>
      </div>
    )
}

export default schedule;
