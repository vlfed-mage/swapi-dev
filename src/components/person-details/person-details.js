import React, { Component } from 'react';

import Services from "../../servises";

export default class PersonDetails extends Component {

    services = new Services();

    state = {
        person: null
    }

    componentDidMount() {
        this.updatePerson();
    }

    componentDidUpdate(prevProps) {
        if (this.props.selectedPersonId !== prevProps.selectedPersonId) {
            this.updatePerson();
        }
    }

    updatePerson() {
        const { selectedPersonId } = this.props;

        if (!selectedPersonId) {
            return;
        }

        this.services
            .getItem('people', selectedPersonId)
            .then((person) => {
                console.log('getItem')
                this.setState({ person })
            })
    }

    render() {
        const { person } = this.state;

        if (!person) {
            return null;
        }

        const { id, name, gender, birthYear, eyeColor } = person;

        return (
            <div className="person-details card">
                <img className="person-image"
                     src={ `https://starwars-visualguide.com/assets/img/characters/${ id }.jpg` }/>

                <div className="card-body">
                    <h4>{ name }</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Gender: </span>
                            <span>{ gender }</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Birth Year: </span>
                            <span>{ birthYear }</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Eye Color: </span>
                            <span>{ eyeColor }</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
