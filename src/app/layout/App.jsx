import React, { Component, Fragment } from 'react';
import { Container } from 'semantic-ui-react';
import EventDashbord from '../../feature/event/EventDashboard/EventDashbord';
import NavBar from '../../feature/nav/NavBar/NavBar';


class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <Container className="main">
          <EventDashbord />
        </Container>
      </Fragment>
    );
  }
}


export default App;