import React, { Component } from "react";
import moment from 'moment';
import API from "../../utils/API";
import { List, ListItem } from "../../components/List";
import { Col, Container } from "../../components/Grid";
// import Calendar from '../../components/Calendar';


class calendar extends Component {
    state = {
        trip: {},
        weather: {}    
    };

    componentDidMount() {
        API.findOneTravel(this.props.match.params.travelId)
        .then(res => this.setState({ trip: res.data.travel, weather: res.data.weather.weather }))
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
               
                        <h3><strong>Your trip details</strong></h3>
                        City: {this.state.trip.city}<br/>
                        Country: {this.state.trip.country}<br/>
                        Start Date: {this.state.trip.startDate}<br/>
                        End Date: {this.state.trip.endDate}<br/>
                        {/* <strong>Weather</strong><br/>
                        Forecast: {this.state.weather.weather.coord.lon}<br/>
                        Temp (Celcius): {this.state.weather.weather}<br/> */}


            </Container>

        );
    }
}

export default calendar;
