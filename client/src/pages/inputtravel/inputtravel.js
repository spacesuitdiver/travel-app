import React, { Component } from "react";
import API from "../../utils/API";
import { Input, FormBtn } from "../../components/TravelForm";
import { List, ListItem } from "../../components/List";
import { Col, Row, Container } from "../../components/Grid";
import { Link } from "react-router-dom";


class inputtravel extends Component {
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

                <form>
                    <Input
                        value={this.state.city}
                        onChange={this.handleInputChange}
                        name="city"
                        placeholder="Where are you going?"
                    />
                    <Input
                        value={this.state.startDate}
                        onChange={this.handleInputChange}
                        name="startDate"
                        placeholder="When are you going?"
                    />
                    <Input
                        value={this.state.country}
                        onChange={this.handleInputChange}
                        name="country"
                        placeholder="When are you going?"
                    />
                    <Input
                        value={this.state.endDate}
                        onChange={this.handleInputChange}
                        name="endDate"
                        placeholder="When are you going?"
                    />
                    <Input
                        value={this.state.weatherDescriptions}
                        onChange={this.handleInputChange}
                        name="weatherDescriptions"
                        placeholder="When are you going?"
                    />
                    <FormBtn
                        disabled={!(this.state.city && this.state.startDate && this.state.endDate && this.state.country)}
                        onClick={this.handleFormSubmit}
                    >
                        SUBMIT
              </FormBtn>
                </form>
                {/* {this.state.trips.length ? (
                    <List>
                        {this.state.trips.map(trip => (
                            <ListItem key={trip._id}>
                                <Link to={"/alltravel/" + trip._id}>
                                    <strong>
                                        {trip.city}
                                    </strong>
                                </Link>
                            </ListItem>
                        ))}
                    </List>
                ) : (
                        <h3>No Results to Display</h3>
                    )} */}
            </Container>

        );
    }
}


export default inputtravel;
