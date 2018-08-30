// TODO: Figure out how to add events

import React from 'react';
import moment from 'moment';
import { getEvents } from './gcal';
import BigCalendar from 'react-big-calendar';
import styled from 'styled-components'
require('react-big-calendar/lib/css/react-big-calendar.css');

BigCalendar.momentLocalizer(moment);

// Uses the styled-components library to add custom styles to components
const Wrapper = styled.div`
  /* Each individual event */
  .rbc-event {
    color: white;
    background: red;
  }

  .rbc-event.rbc-selected {
    background: red;
  }

  /* Days before/after current month */
  .rbc-off-range-bg {
    background: rgb(255,0,0,0.1);
  }

  /* Current day background */
  .rbc-today {
    background: #e5e5e5;
  }

  /* Capitalize tabs */
  div.rbc-calendar div.rbc-toolbar span.rbc-btn-group button {
    text-transform:capitalize
  }
`;

class Calendar extends React.Component {
  constructor () {
    super();
    this.state = {
      events: []
    }
  }
  componentDidMount () {
    getEvents((events) => {
      this.setState({events})
    })
  }
  render () {
    return (
      <Wrapper>
        <BigCalendar
          onSelectEvent={event => alert(
            (typeof event.title !== 'undefined' ?
              event.title + 
              (typeof event.description !== 'undefined' ? '\n\n' + event.description : '') : ''))}
          events={this.state.events}
        />
      </Wrapper>
    )
  }
}

export default Calendar;