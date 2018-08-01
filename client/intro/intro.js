import React, { Component } from "react";
import { Header } from "../../components/Header";
import { About } from "../../components/About";
import { HowWorks } from "../../components/HowWorks";
import { Contact } from "../../components/Contact";

class intro extends Component {

    render() {
        return (
               <Container>
               <Header />
                <About />
                <HowWorks />
                <Contact />
                </Container>
        );
    }

}

export default intro;
