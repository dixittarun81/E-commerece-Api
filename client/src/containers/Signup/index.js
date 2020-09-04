import React from "react";
import Layout from "../../components/Layout";
import { Container, Form, Col, Row, Button } from "react-bootstrap";
import Input from "../../components/Ui/input";

export default function Signup() {
  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: "50px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
              <Row>
                <Col md={6}>
                  <Input
                    label="First Name"
                    placeholder="First Name"
                    value=""
                    type="text"
                    onChange={() => {}}
                  />
                </Col>
                <Col md={6}>
                  <Input
                    label="Last Name"
                    placeholder="Last Name"
                    value=""
                    type="text"
                    onChange={() => {}}
                  />
                </Col>
              </Row>
              <Input
                label="Email"
                placeholder="Email"
                value=""
                type="text"
                onChange={() => {}}
              />
              <Input
                label="Password"
                placeholder="Password"
                value=""
                type="password"
                onChange={() => {}}
              />

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
