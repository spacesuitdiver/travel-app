import React from 'react'
import { render } from 'react-dom'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import Selectable from '../../components/Calendar'

const EXAMPLES = {
  selectable: 'Create events',
}

class Calendar extends React.Component {
  constructor(...args) {
    super(...args)

    const hash = (window.location.hash || '').slice(1)

    this.state = {
      selected: EXAMPLES[hash] ? hash : 'basic',
    }
  }

  select = selected => {
    this.setState({ selected })
  }
  render() {
    let selected = this.state.selected
    let Current = {
      selectable: Selectable,
    }[selected]

    return (
      <div className="app">
        <div className="jumbotron">
          <div className="container">
            <h1>
              Your Trips <i className="fa fa-calendar" />
            </h1>
            <p>Get Stylin'!</p>
          </div>
        </div>
        <Selectable/>
      </div>
    )
  }
}

export default Calendar;