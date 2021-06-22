import React from 'react';
import { Inject, ScheduleComponent, Day, WorkWeek, Month, Agenda } from '@syncfusion/ej2-react-schedule';

const Schedule = () => {

    return (
      <div className="card-body">
        <ScheduleComponent currentView='Month'>
          <Inject services={[Day, WorkWeek, Month, Agenda]} />
        </ScheduleComponent>
      </div>
    )
}

export default Schedule;
