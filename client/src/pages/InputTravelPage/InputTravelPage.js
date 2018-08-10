import React, { Component } from "react";
import API from "../../utils/API";
import { Input, FormBtn } from "../../components/TravelForm";
import { Container } from "../../components/Grid";
import "./InputTravelPage.css";
import "../../components/Navbar/Navbar"
import Auth from '../../modules/Auth';



class InputTravelPage extends Component {
    state = {
        startDate: "",
        endDate: "",
        city: "",
        state: "",
        country: "",
        flightNumber: "",
        hotel: "",
        weatherDescriptions: "",
        trips: [],
        imageObjects: [],
        secretDate: ""
    };

    componentDidMount() {
        this.loadTravel();
        const xhr = new XMLHttpRequest();
        xhr.open('get', '/api/dashboard');
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        // set the authorization HTTP header
        xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
        xhr.responseType = 'json';
        xhr.addEventListener('load', () => {
          if (xhr.status === 200) {
            this.setState({
              secretData: xhr.response.message
            });
          }
        });
        xhr.send();
      }

    // componentDidMount() {
    //     this.loadTravel();
    // }

    loadTravel = () => {
        API.findAllTravel()
            .then(res =>
                this.setState({ trips: res.data })
            )
    }

    deleteTravel = travelId => {
        API.deleteTravel(travelId)
            .then(res => this.loadTravel())
            .catch(err => console.log(err));
    };

    editTravel = travelId => {
        API.editTravel(travelId)
            .catch(err => console.log(err));
    };

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
            .then(res => this.props.history.push("/calendar")
            )
            .catch(err => console.log(err));
    }


    render() {
        return (

            <Container>
                <form>
                    <section id="section">
                    
                    <Input id="city" htmlFor="city"
                        valuehtml="Where do you want to go?"
                        value={this.state.city} onChange={this.handleInputChange} name="city" placeholder="Ex: Paris"
                    />
                    <Input
                        valuehtml="What country are you going to?"
                        value={this.state.country} onChange={this.handleInputChange} name="country" placeholder="Ex: France"
                    />
                </section>
                <section id="sectiontwo">

                    <Input
                        valuehtml="When are you leaving?"
                        value={this.state.startDate} onChange={this.handleInputChange} name="startDate" placeholder="Ex: 02/15/2019"
                    />

                    <Input
                        valuehtml="When are you getting back?"
                        value={this.state.endDate} onChange={this.handleInputChange} name="endDate" placeholder="Ex. 02/20/2019"
                    />
                </section>
                <section id="sectionthree">

                    <Input
                        valuehtml="What is your flight number?"
                        value={this.state.flightNumber} onChange={this.handleInputChange} name="flightNumber" placeholder="Ex. 362826"
                    />

                    <Input
                        valuehtml="What is your hotel?"
                        value={this.state.hotel} onChange={this.handleInputChange} name="hotel" placeholder="Ex. The Four Seasons Bora Bora"
                    />

                    <FormBtn
                        disabled={!(this.state.city && this.state.startDate && this.state.endDate && this.state.country && this.state.flightNumber && this.state.hotel)}
                        onClick={this.handleFormSubmit}
                    >
                        SUBMIT
              </FormBtn>
               </section>
               </form>
                </Container>

        );
    }
}

export default InputTravelPage;