import React, { Component } from 'react';
import './Home.css';
import Header from '../Header';
import Error from '../Error';
import EventList from '../Event_List';
import API from '../../utils/API';

class Home extends Component {

    state = {
        name: "",
        imageURL: "",
        shows: [],
    };

    //when the component mounts, make the bandsintown API call
    componentDidMount() {
        this.bandsInTownQuery();
    };

    //grab the band name from the url
    getBandName = () => {
        //grab the href 
        const url = window.location.href;

        //isolate the query parameter, 'artist=...'
        const query = url.slice(url.indexOf('?'));

        //initialize the url-encoded band name
        let band = '';

        //check if the query parameter is correctly inputed as 'artist'
        if (query.slice(0, 7).toLowerCase() === '?artist') {
            //grab the text after 'artist='
            band = query.slice(8);
        } else {
            //user mal-formatted the query; send them to error page
            window.location = '/error';
        }
        return band;
    };

    bandsInTownQuery = () => {
        //get the band name
        const band = this.getBandName();

        //grab the artist's name and image_url and set it to state
        API.artistInfo(band)
            .then(response =>
                this.setState({
                    name: response.data.name,
                    imageURL: response.data.thumb_url
                })
            )
            .catch(err => console.log(err))
    };

    render() {
        const name = this.state.name;
        let returnDiv;

        if (name === '') {
            returnDiv = <div></div>
        } else if (name === undefined) {
            returnDiv = <Error />
        } else {
            returnDiv = <div>
                <Header
                    name={this.state.name}
                    image={this.state.imageURL}
                />
                <EventList
                    name={this.state.name}
                />
            </div>
        }
        return (
            <div>
                {returnDiv}
            </div>
        );
    };
};

export default Home;