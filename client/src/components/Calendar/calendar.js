import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import React from 'react';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './calendar.css';

BigCalendar.momentLocalizer(moment);

const Calendar = props => (
  
    <BigCalendar
      className="calendar"
      selectable
      defaultView="month"
      events={props.calendarTrips}
      views={['month', 'week', 'day']}
      startAccessor={((e) => {return new Date(e.start)})}
      endAccessor={((e) => {return new Date(e.end)})}
      showMultiDayTimes
      onSelectEvent={event => {
        props.viewTripDetails(event);
        }
      }
      defaultDate={new Date()}
    />
  
)

export default Calendar;