import React, { Component } from "react";
import Header from "../../components/Header/Header";
import About from "../../components/About/About";
import HowWorks from "../../components/HowWorks/HowWorks";
import Contact from "../../components/Contact/Contact";
// import { Creative } from "../../components/Creative";
import { Col, Row, Container } from "../../components/Grid";

import { Card, CardTitle, CardText } from 'material-ui/Card';
import Auth from '../../modules/Auth';



class Intro extends Component {

    componentDidMount() {
        // update authenticated state on logout
        this.props.toggleAuthenticateStatus()
    }
 
    render() {
        return (
            <Container>
                <Header/>
                <Card className="container">
                    <CardTitle title="React Application" subtitle="This is the home page." />
                    {Auth.isUserAuthenticated() ? (
                        <CardText style={{ fontSize: '16px', color: 'green' }}>Welcome! You are logged in.</CardText>
                    ) : (
                        <CardText style={{ fontSize: '16px', color: 'green' }}>You are not logged in.</CardText>
                    )}
                </Card>
                <Header/>                
                <About />         
                <HowWorks />
                <Contact />
            </Container>
        );
    }

}

export default Intro;
