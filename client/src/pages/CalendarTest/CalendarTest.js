import React from 'react'
import { render } from 'react-dom'
import Dropdown from 'react-bootstrap/lib/Dropdown'
import MenuItem from 'react-bootstrap/lib/MenuItem'

import 'react-big-calendar/lib/css/react-big-calendar.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
import Selectable from '../../components/Calendar'


// let demoRoot =
//   'https://github.com/intljusticemission/react-big-calendar/tree/master/examples/demos'

const EXAMPLES = {
  selectable: 'Create events',
}

class Example extends React.Component {
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
              Big Calendar <i className="fa fa-calendar" />
            </h1>
            <p>such enterprise, very business.</p>
            <p>
              <a href="#intro">
                <i className="fa fa-play" /> Getting started
              </a>
              {' | '}
              <a href="#api">
                <i className="fa fa-book" /> API documentation
              </a>
              {' | '}
              <a
                target="_blank"
                href="https://github.com/intljusticemission/react-big-calendar"
              >
                <i className="fa fa-github" /> github
              </a>
            </p>
          </div>
        </div>
        <Selectable/>

        <div className="examples">
          <header className="examples--header">
            <div className="examples--view-source">
              {/* <a target="_blank" href={demoRoot + '/' + selected + '.js'}>
                <strong>
                  <i className="fa fa-code" />
                  {' View example source code'}
                </strong>
              </a> */}
            </div>
            <Dropdown className="examples--dropdown" pullRight>
              <Dropdown.Toggle bsStyle="link" className="dropdown--toggle ">
                {EXAMPLES[selected]}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {Object.entries(EXAMPLES).map(([key, title]) => (
                  <MenuItem href={`#${key}`} onClick={() => this.select(key)}>
                    {title}
                  </MenuItem>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </header>
        </div>
        {/* <div className="docs"> */}
          {/* <div className="contain section">
            <Intro />
          </div>
          <Api className="contain section" />
        </div> */}
      </div>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  render(<Example />, document.getElementById('root'))
})