import React, { Component, Fragment } from 'react'
import EventnListItem from './EventnListItem'
import { isThisHour } from 'date-fns'
import { id } from 'date-fns/locale'

class EventList extends Component {
    render() {
        return (
            <Fragment>
                {this.props.events.map(event => (
                    <EventnListItem key={event.id} event={event} />
                ))}
            </Fragment>
        )
    }
}
export default EventList
