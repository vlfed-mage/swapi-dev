import React, { Component } from 'react';

import ItemList from '../item-list';
import PersonDetails from '../person-details';

export default class PeoplePage extends Component {

    state = {
        selectedPersonId: '1'
    }

    onListItemSelected = (id) => {
        this.setState({
            selectedPersonId: id
        })
    }

    render() {
        const { selectedPersonId } = this.state;

        return (
            <div className='row mb2'>
                <div className='col-md-6'>
                    <ItemList
                        selectedPersonId={ selectedPersonId }
                        onListItemSelected={ this.onListItemSelected } />
                </div>
                <div className='col-md-6'>
                    <PersonDetails
                        selectedPersonId={ selectedPersonId } />
                </div>
            </div>
        )
    }
}