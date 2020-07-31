import React, { Component, Fragment } from 'react';
import { Container } from 'semantic-ui-react';
import { Route } from 'react-router-dom';
import EventDashbord from '../../feature/event/EventDashboard/EventDashbord';
import NavBar from '../../feature/nav/NavBar/NavBar';
import HomePage from '../../feature/home/HomePage';
import PeopleDashboard from '../../user/PeopleDashboard/PeopleDashboard';
import EventDetailedPage from '../../feature/event/EventDetailed/EventDetailedPage';
import SettingsDashboard from '../../user/Settings/SettingsDashboard';
import UserDetailedPage from '../../user/UserDetailed/UserDetailedPage';
import EventForm from '../../feature/event/EventForm/EventForm';
import TestComponent from '../../feature/testArea/TestComponent';


class App extends Component {
  render() {
    return (
      <Fragment>
        <Route exact path='/' component={HomePage} />
        <Route
          path='/(.+)'
          render={() => (
            <Fragment>
              {/* Higher Order Component */}
              <NavBar />
              <Container className="main">
                <Route exact path='/events' component={EventDashbord} />
                <Route path='/events/:id' component={EventDetailedPage} />
                <Route path='/people' component={PeopleDashboard} />
                <Route path='/profile/:id' component={UserDetailedPage} />
                <Route path='/settings' component={SettingsDashboard} />
                <Route path='/createEvent' component={EventForm} />
                <Route path='/test' component={TestComponent} />
              </Container>
            </Fragment>
          )} />
      </Fragment>
    );
  }
}


export default App;