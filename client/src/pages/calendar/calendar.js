import React, { Component } from "react";
import API from "../../utils/API";
import { Input, FormBtn } from "../../components/Travel Form";
import { List, ListItem } from "../../components/List";
import { Col, Row, Container } from "../../components/Grid";
import { Link } from "react-router-dom";
import Calendar from '../../components/Calendar';


class calendar extends Component {
    state = {
        startDate: "",
        endDate: "",
        city: "",
        state: "",
        country: "",
        flightNumber: "",
        hotel: "",
        weatherDescriptions: "",
        days: [],
        imageObject: {}
    };

    // componentDidMount() {
    //     this.loadTravel();
    // }

    // loadTravel = () => {
    //     API.findAllTravel()
    //         .then(res =>
    //             this.setState({ trips: res.data, city: "" })
    //         )
    //     console.log("data:" + this.state.city)

    //     // .catch(err => console.log(err));
    // }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        API.createTravel(
            this.state
        )
            .then(res =>
                console.log(res))
            .catch(err => console.log(err));
    }


    render() {
        return (
            <Container>

                {/* <Col className="calendarCol" xs={12} sm={9} > */}
                    <div className="mainContainer">
                        <h2>Your trip</h2>
                        <div className="calendarContainer">
                        <Calendar calendarTrips={this.props.travel.trip} viewTripDetails={this.viewTripDetails} />
                        </div>
                    </div>

                {/* </Col> */}

            </Container>

        );
    }
}

export default calendar;
