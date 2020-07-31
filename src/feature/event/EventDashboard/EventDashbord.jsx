import React, { Component } from 'react'
import { Grid, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import EventList from '../EventList/EventList';
import EventForm from '../EventForm/EventForm';
import cuid from 'cuid';
import { createEvent, deleteEvent, updateEvent } from '../eventAction';



const mapState = (state) => ({
    events: state.events
})


const actions = {
    createEvent,
    deleteEvent,
    updateEvent
}
class EventDashbord extends Component {
    state = {
        isOpen: false,
        selectedEvent: null
    };

    // handleIsOpenToggle = () => {
    //     this.setState((prevState) => ({
    //         isOpen: !prevState.isOpen
    //     }))
    // }

    // Destructure isopen here.

    // handleIsOpenToggle = () => {
    //     this.setState(({ isOpen }) => ({
    //         isOpen: !isOpen
    //     }))
    // }

    handleCreateFormOpen = () => {
        this.setState({
            isOpen: true,
            selectedEvent: null
        })
    }

    handleFormCancel = () => {
        this.setState({
            isOpen: false
        })
    }

    // Here again we Distructured to avoid this.state.events.
    handleCreateEvent = (newEvent) => {
        newEvent.id = cuid();
        newEvent.hostPhotoURL = '/assets/user.png';
        this.props.createEvent(newEvent);
        this.setState(({ events }) => ({
            // events: [...events, newEvent],
            isOpen: false
        }));

    };

    handleSelectEvent = (event) => {
        this.setState({
            selectedEvent: event,
            isOpen: true
        })
    }

    handleUpdateEvent = (updatedEvent) => {
        this.props.updateEvent(updatedEvent)
        this.setState(({ events }) => ({
            // events: events.map(event => {
            //     if (event.id === updatedEvent.id) {
            //         return { ...updatedEvent }
            //     } else {
            //         return event
            //     }
            // }),
            isOpen: false,
            selectedEvent: null
        }))
    }

    // handleDeleteEvent = (id) => {
    //     this.setState(({ events }) => ({
    //         events: events.filter(e => e.id !== id)

    //     }));
    // console.log(events)

    //}
    handleDeleteEvent = (id) => {
        this.props.deleteEvent(id);
    };




    render() {
        const { isOpen, selectedEvent } = this.state;
        const { events } = this.props;
        return (
            <Grid>
                <Grid.Column width={10}>
                    <EventList events={events}
                        selectEvent={this.handleSelectEvent}
                        deleteEvent={this.handleDeleteEvent} />
                </Grid.Column>
                <Grid.Column width={6}>
                    <Button onClick={this.handleCreateFormOpen} positive content='Create Event' />
                    {/* This is a conditional checking if the form is open. */}
                    {isOpen && (<EventForm
                        key={selectedEvent ? selectedEvent.id : 0}
                        updatedEvent={this.handleUpdateEvent}
                        selectedEvent={selectedEvent}
                        createEvent={this.handleCreateEvent}
                        cancelFormOpen={this.handleFormCancel}
                    />)}
                </Grid.Column>
            </Grid>
        )
    };

}
export default connect(mapState, actions)(EventDashbord);
