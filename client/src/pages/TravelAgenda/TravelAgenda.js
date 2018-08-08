import React, { Component } from "react";
import API from "../../utils/API";
import { List, ListItem } from "../../components/List";
import { Container } from "../../components/Grid";
import FavBtn from "../../components/FavBtn";
import DeleteBtn from "../../components/DeleteBtn";
<<<<<<< HEAD
import { Link } from "react-router-dom";
=======
import "./TravelAgenda.css";
import {Link} from "react-router-dom";
>>>>>>> 70c3df81509d7125ce06b09a93167383a8c81241
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
    }

    deleteTrip = travelId => {

        API.deleteTravel(travelId)
            .then(res => this.props.history.push('/travel')
            ).catch(err => console.log(err));
    };


    deleteImages = id => {
        const imageObjects = this.state.trip.imageObjects.filter(image => {
            return image.id !== id;
        });
        console.log(id, this.state.trip.imageObjects, imageObjects)

        this.setState({
            trip: {
                ...this.state.trip,
                imageObjects,
            }
        });

        API.editTravel(this.props.match.params.travelId, { imageObjects })

    };

    saveImages = (id, tumblrImage) => {

        const notes = [];
        const imageObjects = this.state.trip.imageObjects.concat([{ id, tumblrImage, notes }]);

        console.log(imageObjects);

        this.setState({
            trip: {
                ...this.state.trip,
                imageObjects,
            }
        });

        API.editTravel(this.props.match.params.travelId, { imageObjects })
            .then(res =>
                this.loadUserTravel())
            .catch(err => console.log(err));
    }

    handleFormSubmit = event => {
        event.preventDefault();

        const imageObjects = this.state.trip.imageObjects

        this.setState({
            trip: {
                ...this.state.trip, imageObjects
            }
        });

        API.editTravel(this.props.match.params.travelId, { imageObjects })
            .then(res =>
                this.loadUserTravel())
        console.log(imageObjects)
    }


    handleInputChange = (id, tumblrImage, event) => {
        const { name, value } = event.target;
        this.setState({
            trip: {
                ...this.state.trip,
                imageObjects: [{
                    [name]: value,
                    id: id,
                    tumblrImage: tumblrImage
                }]
            }
        });
    };

    renderTumblrItem(tum) {
        if (!tum.photos) return false;

        return (
            <ListItem key={tum.id}>
                <img src={tum.photos[0].original_size.url} style={{ width: 50, }} />
                <FavBtn onClick={() => this.saveImages(tum.id, tum.photos[0].original_size.url)} />
            </ListItem>
        );
    }

    renderNotes(notes) {
        if (!notes.notes) return false;

        return (
            <ListItem key={notes.id}>
                {notes.notes}
            </ListItem>
        );
    }

    render() {

        return (
            <Container>
                {!this.state.isLoading &&

            <section class="travelDeets">
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
                    </div>
            <div class='ui grid'>
                <div class='row'>
                    <div class='left floated six wide column'>
                        <h3>Fashion pics</h3>

                        {this.state.tumblr.length ? (

                            <List>
                                {this.state.tumblr.map(tum => this.renderTumblrItem(tum))}
                            </List>
                        )
                            :
                            (
                                <h3>No Results to Display</h3>
                            )}

                </div>
                </div>

                <div class='row'>
                    <div class='right floated six wide column'>  


                        <div className="savedArea"><h3>Saved fashion pics</h3></div>
                        {this.state.trip.imageObjects.length ? (
                            <List>
                                {this.state.trip.imageObjects.map(saved => (

                                    <ListItem key={saved.id}>
                                        <img src={saved.tumblrImage} style={{ width: 50 }} />

                                        <DeleteBtn onClick={() => this.deleteImages(saved.id)} />

                                        <Input name="notes"
                                            value={saved.notes}
                                            id={saved.id}
                                            image={saved.tumblrImage}
                                            placeholder="Leave a fashion note for yourself"
<<<<<<< HEAD
                                            onChange={(event) => this.handleInputChange(saved.id, saved.tumblrImage, event)} />

                                        <FormBtn onClick={this.handleFormSubmit} disabled={!(saved.notes)}>
                                            SUBMIT
                                                </FormBtn>

                                        {this.state.trip.imageObjects.length ? (
                                            <List>
                                                {this.state.trip.imageObjects.map(notes => this.renderNotes(notes))}
                                            </List>
                                        )
                                            :
                                            (
                                                <h3>No Notes to Display</h3>
                                            )}
=======
                                        />

                                        {this.state.trip.imageObjects.notes  ? (

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
                                      
                          

                                        <FormBtn onClick={this.handleFormSubmit} disabled={!(saved.notes)}>
                                            SUBMIT
                                        </FormBtn>

>>>>>>> 70c3df81509d7125ce06b09a93167383a8c81241

                                    </ListItem>
                                ))
                                }

                            </List>
                        ) :
                            (
                                <h3>No Results to Display</h3>

                            )}

                    </div>
                </div>

            </div>

            </section>

                }
            </Container>
        );
    }
}

export default TravelAgenda;
