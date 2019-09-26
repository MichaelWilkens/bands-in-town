import React, { Component } from 'react';
import './EventList.css';
import API from '../../utils/API';
import EventListItem from '../Event_List_Item';
import Noshows from '../Noshows';

class EventList extends Component {
    state = {
        shows: 'no-query'
    };

    componentDidMount() {
        this.getShows();
    };

    getShows = () => {
        //grab the artist's upcoming event info
        API.events(this.props.name)
            .then(response =>
                this.setState({
                    shows: response.data
                })
            )
            .catch(err => console.log(err))
    };


    render() {
        const shows = this.state.shows;
        let showsReturnDiv;

        if (!shows.length) {
            showsReturnDiv = <Noshows />
        } else if (shows === 'no-query') {
            showsReturnDiv = <div></div>
        } else {
            showsReturnDiv =
                <table className='shows-table'>
                    <tbody>
                        {this.state.shows.map(show =>
                            <EventListItem
                                key={show.datetime}
                                date={show.datetime}
                                venue={show.venue.name}
                                city={show.venue.city}
                                state={show.venue.region}
                                country={show.venue.country}
                                // check if tickets are available for each show
                                tickets={show.offers.length ? show.offers[0].url : 'none'}
                            />
                        )}
                    </tbody>
                </table>
        }

        return (
            <div>
                {showsReturnDiv}
            </div>
        );
    };
};

export default EventList;
