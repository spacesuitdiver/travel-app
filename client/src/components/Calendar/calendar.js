import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import events from './eventslist'

BigCalendar.momentLocalizer(moment);

const Selectable = props => (
    
    <BigCalendar
      selectable
      events={[events]}
      defaultView="month"
      views={['month', 'week', 'day']}
      scrollToTime={new Date(1970, 1, 1, 6)}
      defaultDate={new Date(2018, 8, 4)}
      onSelectEvent={event => alert(event.title)}
      onSelectSlot={slotInfo =>
        alert(
          `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
            `\nend: ${slotInfo.end.toLocaleString()}` +
            `\naction: ${slotInfo.action}`
        )
      }
    />
)

export default Selectable