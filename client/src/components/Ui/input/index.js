import React from "react";
import {Form} from 'react-bootstrap';

export default function index(props) {
  return (
    <div>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>{props.label}</Form.Label>
        <Form.Control
          type={props.type}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
        />
      </Form.Group>
      <Form.Text className="text-muted">
          {props.errorMessage}
      </Form.Text>
    </div>
  );
}
