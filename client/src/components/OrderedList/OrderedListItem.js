import React from "react";
import { Container, Row, Col } from "../Grid";

export const OrderedListItem = props => (
  <li className="list-group-item">
    <Container>
      <Row>
        <Col size="xs-4 sm-2">
        </Col>
        <Col size="xs-8 sm-9">
          <h3>{props.title}</h3>
        </Col>
      </Row>
    </Container>
  </li>
);
