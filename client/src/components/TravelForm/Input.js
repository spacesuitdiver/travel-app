import React from "react";
import "./Input.css";


export const Input = props => (
<section id="form">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="form-group">
              <input className="form-control" {...props} />
            </div>       
          </div>
        </div>
      </div>
</section>
);

export default Input;