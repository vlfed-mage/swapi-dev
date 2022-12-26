import React, { Component } from 'react';

import Services from "../../servises";
import Loader from "../loader";

export default class ItemList extends Component {

    services = new Services();

    state = {
        people: null
    }

    componentDidMount() {
        this.services
            .getCollection('people')
            .then((people) => {
                this.setState({ people })
            });
    }

    renderItemsList = (arr) => {
        const { onPersonSelected } = this.props;

        return arr.map(({ name, id }) => {
            return (
                <li
                    className="list-group-item"
                    onClick={ () => onPersonSelected(id) }
                    key={ id }>
                    { name }
                </li>
            )
        });
    }

    render() {
        const { people } = this.state;

        if (!people) {
            return <Loader />
        }

        return (
            <ul className="item-list list-group">
                { this.renderItemsList(people) }
            </ul>
        );
    }
}
