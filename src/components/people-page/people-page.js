import React, { Component } from "react";

import ItemList from "../item-list";
import ItemDetails from "../item-details";
import Row from "../row";
import { withData } from "../hoc-helper";
import ErrorBoundary from "../error-boundary";


const Feature = ({ data, field, label }) => {
    return (
        <li className='list-group-item' >
            <span className='term'>{ `${ label }: ` }</span>
            <span>{ data[field] }</span>
        </li>
    )
}

const PeopleList = withData(ItemList, 'people');
const PersonDetails = withData(ItemDetails, 'people', true);

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
                    <PeopleList onListItemSelected={ this.onListItemSelected }>
                        { (i) => `${ i.name } (${ i.gender }, ${ i.birthYear })`}
                    </PeopleList>
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