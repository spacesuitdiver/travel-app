import React, { Component } from "react";
import Header from "../../components/Header/Header";
import About from "../../components/About/About";
import HowWorks from "../../components/HowWorks/HowWorks";
import Contact from "../../components/Contact/Contact";
<<<<<<< HEAD
// import { Creative } from "../../components/Creative";
import { Col, Row, Container } from "../../components/Grid";
=======
import { Container } from "../../components/Grid";

import { Card, CardTitle, CardText } from 'material-ui/Card';
import Auth from '../../modules/Auth';

>>>>>>> b88281d9ecb065ec4a49f950579af2fd347280c5


class Intro extends Component {

<<<<<<< HEAD
    render() {
        return (
            <Container>
                <Header />
                <About />
                {/* <Creative /> */}
=======
    componentDidMount() {
        // update authenticated state on logout
        this.props.toggleAuthenticateStatus()
    }
 
    render() {
        return (
            <Container>
                <Header/>
                <About />         
>>>>>>> b88281d9ecb065ec4a49f950579af2fd347280c5
                <HowWorks />
                <Contact />
            </Container>
        );
    }

}

export default Intro;
