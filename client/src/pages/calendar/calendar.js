import React, { Component } from "react";
import moment from 'moment';
import API from "../../utils/API";
import { List, ListItem } from "../../components/List";
import { Col, Container } from "../../components/Grid";
// import Calendar from '../../components/Calendar';


class calendar extends Component {
    state = {
        travel: {}    
    };

    componentDidMount() {
        this.loadUserTrip();
    }

    loadUserTrip () {
        API.findOneTravel(this.props.match.params.travelId)
        .then(res => this.setState({ travel: res.data }))
        .then(console.log(this.travel))
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
                {/* <Col size="md-12 sm-12">
                
                    <div className="mainContainer">
                       <List>Your trip</List>
                        {/* <div className="calendarContainer">
                        <Calendar events={this.state.travel} />
                        </div> */}

                    {/* </div> */}

                {/* </Col> */}

                 {this.state.travel.length ? (
                    <List>Your trips
                        {this.state.travel.map(trav => (
                            <ListItem key={trav._id}>
                                {/* <Link to={"/calendar/" + trip._id}> */}
                                    <strong>
                                        {trav.city}
                                    </strong>
                                {/* </Link> */}
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

export default calendar;
