import React, { Component } from "react";
import API from "../../utils/API";
import { List, ListItem } from "../../components/List";
import { Container } from "../../components/Grid";
import FavBtn from "../../components/FavBtn";
import DeleteBtn from "../../components/DeleteBtn";
import {Link} from "react-router-dom";
import { Input, FormBtn } from "../../components/TravelForm";


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
        tumblr: null
    };

    componentDidMount() {
        this.loadUserTravel();
    }

    loadUserTravel = () => {
        API.findOneTravel(this.props.match.params.travelId)
            .then(res => this.setState({
                weather: res.data.weather,
                tumblr: res.data.tumblr,
                trip: res.data.travel,
                imageObjects: res.data.travel.imageObjects
            }))
            .then(() => this.setState({ isLoading: false }))
            .catch(err => console.log(err));
        console.log(this.state.trip.imageObjects)
    }

    deleteTrip = travelId => {

        API.deleteTravel(travelId)
            .then(res => this.props.history.push('/calendar')
            ).catch(err => console.log(err));
    };

    deleteImages = id => {

        const featuredPhotos = this.state.trip.imageObjects.filter(photo => photo._id !== id);

        this.setState({ trip: { imageObjects: featuredPhotos } })

        API.editTravel(this.props.match.params.travelId, { featuredPhotos })
            .then(res =>
                this.loadUserTravel())
    };

    saveImages = (id, tumblrImage) => {

        const notes = [];
        const details = this.state.trip.imageObjects.concat([{ id, tumblrImage, notes }]);

        this.setState({ trip: { imageObjects: details } })
        console.log(this.state)

        API.editTravel(this.props.match.params.travelId, { "imageObjects": [{ "id": id, "tumblrImage": tumblrImage, "notes": notes }] })

            .then(res =>
                this.loadUserTravel())
            .catch(err => console.log(err));
    }

    handleFormSubmit = event => {
        event.preventDefault()
        // API.createTravel({
        //     trip: { imageObjects: [{ notes: [this.state.trip.imageObjects.notes], id: this.state.trip.imageObjects.id, tumblrImage: {} }]}})

        API.editTravel(this.props.match.params.travelId, { "imageObjects": [{ "id": this.state.trip.imageObjects.id }, { "tumblrImage": this.state.trip.imageObjects.tumblrImage }, { "notes": this.state.trip.imageObjects.notes }] })

            .then(this.loadUserTravel())
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
                        <h3><strong>Temperature</strong></h3>
                        <p>{this.state.weather.main.temp}</p>
                        <button onClick={() => this.deleteTrip(this.state.trip._id)} >DELETE TRIP</button>
                        <button><Link to={"/travel/"}>ADD ANOTHER TRIP</Link></button>

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

                                    <ListItem key={clicked._id}>
                                        <img src={clicked.tumblrImage} />

                                        <DeleteBtn onClick={() => this.deleteImages(clicked._id)} />

                                        Fashion Note:
                                <Input
                                            value={clicked.notes}
                                            onChange={this.handleInputChange}
                                            name="notes"
                                            placeholder="Leave a fashion note for yourself"
                                        />



                                        {this.state.trip.imageObjects.notes !== undefined ? (

                                                <List>
                                                    {this.state.imageObjects.notes.map(note => (


                                                        <ListItem key={note._id}>


                                                            ) : false}
    
    
                                                </ListItem>
                                                    ))}

                                                </List>
                                            )
                                                :
                                                (
                                                    <h3>No notes for this fav photo</h3>
                                                )
                                        }
                                      

                                        <FormBtn onClick={this.handleFormSubmit} disabled={!(clicked.notes)}>
                                            SUBMIT
      </FormBtn>


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
