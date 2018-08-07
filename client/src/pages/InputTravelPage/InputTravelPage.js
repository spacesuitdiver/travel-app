import React, { Component } from "react";
import API from "../../utils/API";
import { Input, FormBtn, Form } from "../../components/TravelForm";
import { Container } from "../../components/Grid";
import "./InputTravelPage.css";
import "../../components/Navbar/Navbar"


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
        imageObjects: []
    };

    componentDidMount() {
        this.loadTravel();
    }

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
                    <section>
                    <Input
                        value={this.state.city} onChange={this.handleInputChange} name="city" placeholder="Where are you going?"
                    />
                    <Input
                        value={this.state.startDate} onChange={this.handleInputChange} name="startDate" placeholder="When are you leaving?"
                    />
                </section>
                <section>
                    <Input
                        value={this.state.endDate} onChange={this.handleInputChange} name="endDate" placeholder="When are you getting back?"
                    />
                    <Input
                        value={this.state.country} onChange={this.handleInputChange} name="country" placeholder="What country are you going to?"
                    />

                    <FormBtn
                        disabled={!(this.state.city && this.state.startDate && this.state.endDate && this.state.country)}
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

