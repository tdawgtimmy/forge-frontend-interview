import axios from "axios";
import sortBy from "lodash.sortby";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import NotificationList from "./components/NotificationList";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [filter, setFilter] = useState("id");
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/notifications").then((response) => {
      setNotifications(response.data);
    });
  });

  return (
    <div className="App">
      <Navbar bg="light justify-content-between">
        <Form inline>
          <Form.Label>Filter By:&nbsp;</Form.Label>
          <Form.Control
            as="select"
            onChange={(evt) => {
              setFilter(evt.target.value);
            }}
          >
            <option value="id">None</option>
            <option value="severity">Severity</option>
          </Form.Control>
        </Form>
        <Button variant="primary" inline disabled>
          Add Notification
        </Button>
      </Navbar>
      <Container>
        <NotificationList
          notifications={sortBy(notifications, filter)}
        ></NotificationList>
      </Container>
    </div>
  );
}

export default App;
