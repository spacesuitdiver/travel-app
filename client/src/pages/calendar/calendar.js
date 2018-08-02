import React, { Component } from "react";
import API from "../../utils/API";
import { Input, FormBtn } from "../../components/Travel Form";
import { List, ListItem } from "../../components/List";
import { Col, Row, Container } from "../../components/Grid";
import { Link } from "react-router-dom";
import Calendar from '../../components/Calendar';


class calendar extends Component {
    state = {
        travel: {}    
    };

    componentDidMount() {
        API.findOneTravel(this.props.match.params.id)
        .then(res => this.setState({ travel: res.data }
        )
    )
    console.log(this.state.travel)

        // .catch(err => console.log(err));
    }


    

    render() {
        return (
            <Container>

                {/* <Col className="calendarCol" xs={12} sm={9} > */}
                    <div className="mainContainer">
                        <h2>Your trip</h2>
                        <div className="calendarContainer">
                        <Calendar events={this.state.travel} />
                        </div>
                    </div>

                {/* </Col> */}

            </Container>

        );
    }
}

export default calendar;
