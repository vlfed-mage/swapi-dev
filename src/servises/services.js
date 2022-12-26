export default class Services {
    _bodyUrl = 'https://swapi.dev/api/';

    _extractId(resource) {
        const regex = /\/([0-9]*)\/$/;
        return resource.url.match(regex)[1];
    }

    _transformPlanet = (planet) => {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter,
        };
    }

    _transformPerson = (person) => {
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color,
        };
    }

    async getResources(source, id = '') {
        const response = await fetch(`${ this._bodyUrl }${ source }/${ id }`);

        if (!response.ok) {
            throw new Error(`
                Could not fetch. Status ${ response.status }
            `)
        }

        return await response.json();
    }

    async getCollection(name) {
        const response = await this.getResources(name);
        switch (name) {
            case 'planets':
                return response.results.map(this._transformPlanet);
            case 'people':
                return response.results.map(this._transformPerson);
            default:
                return response.results;
        }
    }

    async getItem(name, id) {
        const response = await this.getResources(name, id);
        switch (name) {
            case 'planets':
                return this._transformPlanet(response);
            case 'people':
                return this._transformPerson(response);
            default:
                return response;
        }
    }
}