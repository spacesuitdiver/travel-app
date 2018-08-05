import React, { Component } from "react";
import moment from 'moment';
import API from "../../utils/API";
import { List, ListItem } from "../../components/List";
import { Col, Container } from "../../components/Grid";
// import Calendar from '../../components/Calendar';
import FavBtn from "../../components/FavBtn";
import DeleteBtn from "../../components/DeleteBtn";



class TravelAgenda extends Component {
    state = {
        trip: {
            imageObjects: []
            },
        weather: null,
        isLoading: true,
    };

    componentDidMount() {
        this.loadUserTravel();
        console.log(this.state)

    }

    loadUserTravel = () => {
        API.findOneTravel(this.props.match.params.travelId)
            .then(res => this.setState({
                trip: res.data.travel,
                weather: res.data.weather,
                tumblr: res.data.tumblr,
                imageObjects: res.data.travel.imageObjects
            }))
            .then(() => this.setState({ isLoading: false }))
            .catch(err => console.log(err));
    }

    deleteImages = travelId => {
        API.deleteTravel(travelId)
            .catch(err => console.log(err));
    };

    saveImages = (tumblrObject) => {

        const image = this.state.trip.imageObjects.concat(tumblrObject);  

        this.setState({trip:{imageObjects: image}})
        
        API.editTravel(this.props.match.params.travelId, {imageObjects: image})
        console.log(this.state)

        // this.loadUserTravel();

        }

    // window.location.reload();
    // this.clickFunction();
    // .then(this.loadUserTravel())
    // .catch(err => console.log(err));



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

                                        
                                        <FavBtn onClick={() => this.saveImages(tum.photos[0].original_size.url)} />

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
                                        <img src={clicked}/>
                                        <DeleteBtn onClick={() => this.deleteImages(clicked._id)} />
                                    </ListItem>

                                ))}
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

