
import * as React from 'react';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Inject, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-schedule';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

class WorkSchedule extends React.Component {
  constructor() {
      super(...arguments);
      this.scheduleData = [{
          Id: 3,
          Subject: 'Bogdan Osiek - KrakowKat',
          StartTime: new Date(2021, 5, 21, 9, 0),
          EndTime: new Date(2021, 5, 21, 13, 0)
      }, {
          Id: 4,
          Subject: 'Ewa Rajska',
          StartTime: new Date(2021, 5, 24, 9, 0),
          EndTime: new Date(2021, 5, 24, 17, 0)
      }];
  }
  onAddClick() {
      let Data = [{
            Id: 1,
            Subject: 'Bogdan Osiek - KatowiceKra',
            StartTime: new Date(2021, 5, 22, 9, 0),
            EndTime: new Date(2021, 5, 22, 11, 0)
          }, {
            Id: 2,
            Subject: 'Arkadiusz Horwat',
            StartTime: new Date(2021, 5, 25, 11, 0),
            EndTime: new Date(2021, 5, 25, 15, 30)
          }];
      this.scheduleObj.addEvent(Data);
      this.buttonObj.element.setAttribute('disabled', 'true');
  }

  onDeleteClick() {
    this.scheduleObj.deleteEvent(4);
    this.buttonObj.element.setAttribute('disabled', 'true');
  }

  onEditClick() {
    let Data = {
        Id: 3,
        Subject: 'Bogdan Osiek - KrakowKat',
        StartTime: new Date(2018, 1, 11, 13, 0),
        EndTime: new Date(2018, 1, 11, 17, 0),
        IsAllDay: false
    };
    this.scheduleObj.saveEvent(Data);
    this.buttonObj.element.setAttribute('disabled', 'true');
}

  render() {
      return (<div>
      {this.props.user.type !== 2 && 
      <ButtonComponent id='add' title='Add' ref={t => this.buttonObj = t} onClick={this.onAddClick.bind(this)}>Dodaj</ButtonComponent>
      }
      {this.props.user.type !== 2 &&
      <ButtonComponent id='delete' ref={t => this.buttonObj = t} title='Delete' onClick={this.onDeleteClick.bind(this)}>Usuń</ButtonComponent>
      }
      {this.props.user.type !== 2 &&
      <ButtonComponent id='edit' title='Edit' ref={t => this.buttonObj = t} onClick={this.onEditClick.bind(this)}>Edytuj</ButtonComponent>
      }
      <ScheduleComponent ref={t => this.scheduleObj = t} width='100%' height='550px' eventSettings={{ dataSource: this.scheduleData }} readonly={true}>
          <ViewsDirective>
              <ViewDirective option='Day'/>
              <ViewDirective option='Week'/>
              <ViewDirective option='WorkWeek'/>
              <ViewDirective option='Month'/>
          </ViewsDirective>
          <Inject services={[Day, Week, WorkWeek, Month]}/>
      </ScheduleComponent>
    </div>);
    }
};
export default WorkSchedule;