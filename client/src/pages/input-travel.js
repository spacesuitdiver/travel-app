import React, { Component } from "react";
import API from "../../utils/API";
import { Input, FormBtn } from "../../components/Travel Form";
import { List, ListItem } from "../../components/List";
import { Col, Row, Container } from "../../components/Grid";
import { Link } from "react-router-dom";


class inputtravel extends Component {
    state = {
        trips: [],
        _id: "",
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

    componentDidMount() {
        this.loadTravel();
      }

    loadTravel = () => {
        API.findAllTravel()
            .then(res =>
                this.setState({ trips: res.data, city: "" })
            )
        console.log(this.state.city)

        // .catch(err => console.log(err));
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        API.createTravel({
            city: this.state.where
        })
            .then(res =>
                this.loadTravel())
            .catch(err => console.log(err));
    }


    render() {
        return (
            <Container>

                <form>
                    <Input
                        value={this.state.where}
                        onChange={this.handleInputChange}
                        name="where"
                        placeholder="Where are you going?"
                    />
                    <Input
                        value={this.state.when}
                        onChange={this.handleInputChange}
                        name="when"
                        placeholder="When are you going?"
                    />
                    <FormBtn
                        disabled={!(this.state.where && this.state.when)}
                        onClick={this.handleFormSubmit}
                    >
                        SUBMIT
              </FormBtn>
                </form>
                {this.state.trips.length ? (
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
                    )}
            </Container>

        );
    }
}


export default inputtravel;