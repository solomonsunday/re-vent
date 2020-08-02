//rafc shortCode for create a stateless function
//rfce
import React from 'react';
import { Grid } from 'semantic-ui-react';
import EventDetailHeader from '../EventList/EventDetailHeader';
import EventDetailInfo from '../EventList/EventDetailInfo';
import EventDetailChat from '../EventList/EventDetailChat';
import EventDetailedSideBar from '../EventList/EventDetailedSideBar';

export const EventDetailedPage = () => {
    return (
        <Grid>
            <Grid.Column width={10}>
                <EventDetailHeader />
                <EventDetailInfo />
                <EventDetailChat />
            </Grid.Column>
            <Grid.Column width={6}>
                <EventDetailedSideBar />
            </Grid.Column>
        </Grid>
    )
}
export default EventDetailedPage
