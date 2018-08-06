import React, { Component } from "react";
import moment from 'moment';
import API from "../../utils/API";
import { List, ListItem } from "../../components/List";
import { Col, Container } from "../../components/Grid";
// import Calendar from '../../components/Calendar';
import FavBtn from "../../components/FavBtn";
import DeleteBtn from "../../components/DeleteBtn";
import { Input, FormBtn, Form } from "../../components/TravelForm";


class TravelAgenda extends Component {
    state = {
        trip: {
            imageObjects: [],
            city: null,
            country: null,
            startDate: null,
            endDate: null,
            hotel: null,
            flightNumber: null,
        },
        weather: null,
        isLoading: true,
    };

    componentDidMount() {
        this.loadUserTravel();
    }

    loadUserTravel = () => {
        API.findOneTravel(this.props.match.params.travelId)
            .then(res => this.setState({
                weather: res.data.weather,
                tumblr: res.data.tumblr,
                trip: res.data.travel}))
                // trip: res.data.travel { imageObjects: [{ id: res.data.travel.imageObjects.id }, { tumblrImage: res.data.travel.imageObjects.tumblrImage }, { notes: [res.data.travel.imageObjects.notes] }
            .then(() => this.setState({ isLoading: false }))
            .catch(err => console.log(err));
        console.log(this.state)

    }

    deleteImages = id => {
        id = id.toString();
        API.deleteTravel(id)
        // .then(res =>this.loadUserTravel());

        console.log(id)
    };

    saveImages = (id, tumblrImage) => {
        const notes = [];
        const details = this.state.trip.imageObjects.concat([{ id, tumblrImage, notes }]);

        this.setState({ trip: { imageObjects: details } })
        console.log(this.state)

        API.editTravel(this.props.match.params.travelId, { trip: { imageObjects: [details] } })

        // .then(res => this.loadUserTravel())

    }

    handleFormSubmit = event => {
        event.preventDefault()
        .then(res =>
        API.createTravel({
            trip: { imageObjects: [{ notes: [], id: res.data, tumblrImage: {} }]}}))
    console.log(this.state)

    // .then(this.loadUserTravel())
};

handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
        trip: {
            imageObjects: [{
                [name]: value
            }]
        }
    });
};

render() {

    return (
        <Container>
            {!this.state.isLoading &&
                <div>
                    <h3><strong>Your trip details</strong></h3>
                    City: {this.state.trip.city}<br />
                    Country: {this.state.trip.country}<br />
                    Start Date: {this.state.trip.startDate}<br />
                    End Date: {this.state.trip.endDate}<br />
                    Flight: {this.state.trip.flightNumber}<br />
                    Hotel: {this.state.trip.hotel}<br />
                    <h3><strong>Weather details</strong></h3>
                    <p>{this.state.weather.weather[0].description}</p>
                    <h3><strong>Temperature (celsius)</strong></h3>
                    <p>{this.state.weather.main.temp}</p>
                    <h3>Fashion pics</h3>


                    {this.state.tumblr.length ? (

                        <List>
                            {this.state.tumblr.map(tum => (

                                <ListItem key={tum.id}>


                                    {tum.photos && tum.photos.length ? (

                                        <img src={tum.photos[0].original_size.url} />

                                    ) : false}

                                    <FavBtn onClick={() => this.saveImages(tum.id, tum.photos[0].original_size.url)} />

                                </ListItem>
                            ))}

                        </List>
                    )
                        :
                        (
                            <h3>No Results to Display</h3>
                        )}

                    <div className="savedArea"><h3>Saved fashion pics</h3></div>
                    {this.state.trip.imageObjects.length ? (
                        <List>
                            {this.state.trip.imageObjects.map(clicked => (

                                <ListItem key={clicked.id}>
                                    <img src={clicked.tumblrImage} />

                                    <DeleteBtn onClick={() => this.deleteImages(clicked.id)} />

                                    Fashion Note:
                                <Input
                                        value={clicked.notes}
                                        onChange={this.handleInputChange}
                                        name="notes"
                                        placeholder="Leave a fashion note to yourself"
                                    />

                                    <FormBtn onClick={this.handleFormSubmit} disabled={!(clicked.notes)}>
                                        SUBMIT
      </FormBtn>
                                    Notes: {clicked.notes}
                                </ListItem>

                            ))
                            }

                        </List>
                    ) :
                        (
                            <h3>No Results to Display</h3>

                        )}

                </div>
            }

        </Container>
    );
}
}

export default TravelAgenda;

