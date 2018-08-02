import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import React from 'react';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './calendar.css';
import dates from '../../utils/dates'

BigCalendar.momentLocalizer(moment);

const Calendar = props => (
  
  <BigCalendar
    selectable
    events={props.travel}
    defaultView="month"
    views={['month', 'week', 'day']}
    startAccessor={((e) => {return new Date(e.start)})}
    endAccessor={((e) => {return new Date(e.end)})}
    onSelectEvent={event => {
      props.travel(event);
      }
    }
    showMultiDayTimes
    defaultDate={new Date()}

  />

)

export default Calendar;