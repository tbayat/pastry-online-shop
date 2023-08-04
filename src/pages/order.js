import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function OrderNow() {
  return (
    <div
      style={{
        width: "100vw",
        padding: "50px 50px 50px 50px",
        textAlign: "justify",
        textJustify: "inter-word",
        alignItems: "center",
        fontFamily: "serif",
      }}
    >
      <h3>Order</h3>
      <h4>
        * Important, Please read the following information before placing an
        order!*
      </h4>
      <h5>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
        volutpat.:
      </h5>
      <ul>
        <li>
          Orders must be placed before 12:00 noon for pick up the following day.
        </li>
        <li>All orders will be confirmed via email.</li>
        <li>
          Orders may be picked up in the store. Delivery is temporarily
          unavailable.
        </li>
        <li>
          Orders above €35.00 must be paid in advance and may be paid on line to
          the account of: HappyCake Company NL ** AAAA ******
        </li>
      </ul>
      <br />
      <h5>Contact Information</h5>
      <h6>
        The following information is required in order to process your order:
      </h6>
      <br />

      <Form>
        <Form.Group>
          <Form.Label>Enter your full name:</Form.Label>
          <Form.Control type="text" placeholder="Enter your full name" />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Enter your email address:</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your your email address"
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Enter your phone number:</Form.Label>
          <Form.Control type="number" placeholder="Enter your phone number" />
        </Form.Group>
        <br />
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Your Order/Special request:</Form.Label>
          <Form.Control as="textarea" rows={5} />
        </Form.Group>
        <br />
        <Button
          type="submit"
          style={{
            borderColor: "#ad8a85",
            backgroundColor: "#ad8a85",
            boxShadow: "3px 3px #D2B4AA",
            color: "rgb(33, 37, 41)",
            fontFamily: "serif",
            width: "150px",
          }}
        >
          submit
        </Button>
      </Form>
    </div>
  );
}

export default OrderNow;
