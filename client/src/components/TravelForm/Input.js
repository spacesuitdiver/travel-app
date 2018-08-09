import React from "react";
import PropTypes from 'prop-types';
import "./Input.css";
import { Card, CardTitle, CardText } from 'material-ui/Card';


export const Input = props => (

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
              </div>
            </div>
          </div>
        </div> 
    </div>
  </Card>

);
    Input.propTypes = {
      secretData: PropTypes.string.isRequired
    };
export default Input;