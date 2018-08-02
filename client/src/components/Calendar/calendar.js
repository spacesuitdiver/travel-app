import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import React from 'react';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './calendar.css';
import dates from '../../utils/dates'

BigCalendar.momentLocalizer(moment);

let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])

let Calendar = ({ localizer, props }) => (
  <BigCalendar
    events={props.trips}
    views={allViews}
    step={60}
    showMultiDayTimes
    max={dates.add(dates.endOf(new Date(2015, 17, 1), 'day'), -1, 'hours')}
    defaultDate={new Date(2015, 3, 1)}
    localizer={localizer}
  />
)

export default Calendar;