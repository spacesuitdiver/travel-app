import React, { Component } from "react";
import moment from 'moment';
import API from "../../utils/API";
import { List, ListItem } from "../../components/List";
import { Col, Container } from "../../components/Grid";
// import Calendar from '../../components/Calendar';


class Calendar extends Component {
    state = {
        trip: null,
        weather: null,
        tumblr: null,
        isLoading: true,
    };

    componentDidMount() {
        API.findOneTravel(this.props.match.params.travelId)
            .then(res => this.setState({ trip: res.data.travel, weather: res.data.weather, tumblr: res.data.tumblr }))
            .then(() => this.setState({ isLoading: false }))
            .catch(err => console.log(err));
    }

    // getCalendar = (event) => {
    //     event.preventDefault();
    //     console.log('hey')
    //     // API.findOneTravel(this.props.match.params.id)
    //     // .then(res => 
    //     //     this.setState({ travel: res.data }
    //     // ))
    //     // .then(console.log("hey"))
    //   };

    // viewTripDetails = clickedEvent => {
    // 	// console.log("event clicked! - before formatting:", clickedEvent);
    // 	API.findOneTravel(this.props.match.params.id).then(response => {
    // 		const selectedTrip = { ...response.data, }
    // 		selectedTrip.start = moment(selectedTrip.start).format("dddd, MMMM, D, YYYY,  h:mm A"); 
    // 		selectedTrip.end = moment(selectedTrip.end).format("dddd, MMMM, D, YYYY,  h:mm A");
    // 		// selectedSession.newStudyBuddyInfo = { email:"", studyBuddyEmailMsg: ""};
    // 		// console.log("selectedSession after formatting:", selectedSession);

    // 		// this.setState({
    // 		// 	selectedSession: selectedSession,
    // 		// 	showSessionDetailModal: true
    // 		// })
    // 	})
    // };

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
                        <h3><strong>Weather details</strong></h3>
                        <p>{this.state.weather.weather[0].description}</p>
                        <h3><strong>Temperature (celius)</strong></h3>
                        <p>{this.state.weather.main.temp}</p>
                        <h3>Your fashion pics</h3>
                        

                        {this.state.tumblr.length ? (

                            <List>
                                {this.state.tumblr.map(tum => (
                                        <ListItem key={tum._id}>
                                         <img src={tum.photos[0].original_size.url}/>
                                        </ListItem>
                                    ))}
                            </List>
                        ) : (
                                <h3>No Results to Display</h3>
                            )}

                    </div>
                }
            </Container>

        );
    }
}

export default Calendar;

