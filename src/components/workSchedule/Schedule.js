import React from 'react';
import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-react-schedule';

const schedule = ({user}) => {

    return (
      <div className="card-body">
        {user.type !== 2 && 'można edytować'}
        <ScheduleComponent currentView='Month'>
          <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
        </ScheduleComponent>
      </div>
    )
}

export default schedule;
