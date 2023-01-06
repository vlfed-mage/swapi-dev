import React, { Component } from "react";

import Row from "../row";
import ErrorBoundary from "../error-boundary";
import { PeopleList, PersonDetails, Feature } from "../sw-components";

export default class PeoplePage extends Component {
    _pageName = 'people'
    state = {
        selectedItemId: '11'
    }

    onListItemSelected = (id) => {
        this.setState({
            selectedItemId: id
        })
    }

    render() {
        const { selectedItemId } = this.state;

        return (
            <Row >
                <ErrorBoundary >
                    <PeopleList onListItemSelected={ this.onListItemSelected } />
                </ErrorBoundary>

                <ErrorBoundary >
                    <PersonDetails
                        name={ this._pageName }
                        selectedItemId={ selectedItemId } >

                        <Feature label='Gender' field='gender'/>
                        <Feature label='Birth Year' field='birthYear'/>
                        <Feature label='Eye Color' field='eyeColor'/>
                    </PersonDetails>
                </ErrorBoundary>
            </Row>
        )
    }
};
