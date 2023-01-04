import React, { Component } from "react";

import ItemList from "../item-list";
import ItemDetails from "../item-details";
import Row from "../row";
import ApiServices from "../../api-services";

const Feature = ({ details, field, label }) => {
    return (
        <li className='list-group-item' >
            <span className='term'>{ `${ label }: ` }</span>
            <span>{ details[field] }</span>
        </li>
    )
}

export default class PeoplePage extends Component {
    _pageName = 'people'
    apiServices = new ApiServices();
    state = {
        selectedItemId: '1'
    }

    getData = (name, id = null) => {
        const { getItem, getCollection } = this.apiServices;
        return id ? getItem(name, id) : getCollection(name);
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
                <ItemList
                    name={ this._pageName }
                    getData={ this.getData }
                    selectedItemId={ selectedItemId }
                    onListItemSelected={ this.onListItemSelected } >
                    {
                        (i) => `${ i.name } (${ i.gender }, ${ i.birthYear })`
                    }
                </ItemList>
                <ItemDetails
                    name={ this._pageName }
                    getData={ this.getData }
                    selectedItemId={ selectedItemId } >

                    <Feature label='Gender' field='gender'/>
                    <Feature label='Birth Year' field='birthYear'/>
                    <Feature label='Eye Color' field='eyeColor'/>

                </ItemDetails>
            </Row>
        )
    }
};