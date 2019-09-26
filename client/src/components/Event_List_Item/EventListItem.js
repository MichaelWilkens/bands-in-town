import React from 'react';
import './EventListItem.css';
import moment from 'moment';

function EventListItem(props) {
    return (
        <tr>
            <div className='show-table-row'>
                <td className='show-text-area'>
                    <p className='show-date'>
                        {moment(props.date).format('MMM DD')}
                    </p>
                    <p className='show-venue'>
                        {props.venue}
                    </p>
                    <p className='show-city'>
                        {props.city + ','}
                    </p>
                    <p className='show-region'>
                        {props.country === 'United States' ? props.state : props.country}
                    </p>
                </td>
                <td className='show-button-td'>
                    <a className='show-a-tag' target='_blank' href={props.tickets}>Tickets</a>
                </td>
            </div>
        </tr>
    );
}

export default EventListItem;
