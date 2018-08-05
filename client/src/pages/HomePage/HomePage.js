import React, { Component } from "react";
import Header from "../../components/Header/Header";
import About from "../../components/About/About";
import HowWorks from "../../components/HowWorks/HowWorks";
import Contact from "../../components/Contact/Contact";
// import { Creative } from "../../components/Creative";
import { Col, Row, Container } from "../../components/Grid";


class Intro extends Component {

    render() {
        return (
            <Container>
                <Header />
                <About />
                {/* <Creative /> */}
                <HowWorks />
                <Contact />
            </Container>
        );
    }

}

export default Intro;
