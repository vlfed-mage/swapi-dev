export default class ApiServices {

    _bodyUrl = 'https://swapi.dev/api/';

    async _getData(name, id = '') {
        const data = await fetch(`${this._bodyUrl}${name}/${id}`);

        if (!data.ok) {
            throw new Error(`
                Couldn't fetch. Status: ${ data.status }
            `)
        }

        return data.json();
    }

    _extractId(url) {
        const regex = /\/([0-9]*)\/$/;
        return url.match(regex)[1];
    }

    _transformPlanet = (planet) => {
        return {
            id: this._extractId(planet.url),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter,
            selected: false
        }
    }

    _transformPerson = (person) => {
        return {
            id: this._extractId(person.url),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color,
            selected: false
        }
    }

    async getCollection(name) {
        const collection = await this._getData(name);
        switch (name) {
            case 'planets':
                return collection.results.map(this._transformPlanet);
            case 'people':
                return collection.results.map(this._transformPerson)
            default:
                return collection.results;
        }
    }

    async getItem(name, id) {
        const item = await this._getData(name, id);
        switch (name) {
            case 'planets':
                return this._transformPlanet(item);
            case 'people':
                return this._transformPerson(item)
            default:
                return item;
        }
    }
}