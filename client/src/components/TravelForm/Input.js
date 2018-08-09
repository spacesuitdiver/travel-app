import React from "react";
import PropTypes from 'prop-types';
import "./Input.css";
import { Card, CardTitle, CardText } from 'material-ui/Card';


<<<<<<< HEAD
=======

export const Input = ({props, secretData}) => (

  <Card className="container">
    <CardTitle
    title="Travel"
    subtitle="You should get access to this page only after authentication."
  />
    {secretData && <CardText style={{ fontSize: '16px', color: 'green' }}>{secretData}</CardText>}

    <div id="form">
      <div className="container">
          <div className="main-section">
            <div className="row">
              <div className="col-md-12 text-center">
                <div className="form-group">
                  <input className="form-control"
                    // {...props} 
                    {...props}
                  />
                </div>

>>>>>>> b88281d9ecb065ec4a49f950579af2fd347280c5
export const Input = props => (
  <div id="form">
    <div className="container">
        <div className="main-section">
<<<<<<< HEAD
        <label className="title" htmlFor={props.htmlFor}>{props.valuehtml}</label>
        <br></br>
        <br></br>
=======
>>>>>>> b88281d9ecb065ec4a49f950579af2fd347280c5
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="form-group">
                <input className="form-control"
<<<<<<< HEAD
                  // {...props} 
                  {...props}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>

);
=======
                  {...props}
                />

              </div>
            </div>
          </div>
        </div> 
    </div>
  </Card>
>>>>>>> b88281d9ecb065ec4a49f950579af2fd347280c5

);
    Input.propTypes = {
      secretData: PropTypes.string.isRequired
    };
export default Input;