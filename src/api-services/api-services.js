export default class ApiServices {

    _bodyUrl = 'https://swapi.dev/api/';
    _bodyImgUrl = 'https://starwars-visualguide.com/assets/img/';

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

    _transformStarship = (starship) => {
        return {
            id: this._extractId(starship.url),
            name: starship.name,
            manufacturer: starship.manufacturer,
            passengers: starship.passengers,
            starshipClass: starship.starship_class,
            selected: false
        }
    }

    _transformPageNameToCategory = (name) => {
        switch (name) {
            case 'people':
                return 'characters'
            default:
                return name;
        }
    }

    getCollection = async (name) => {
        const collection = await this._getData(name);
        switch (name) {
            case 'planets':
                return collection.results.map(this._transformPlanet);
            case 'people':
                return collection.results.map(this._transformPerson)
            case 'starships':
                return collection.results.map(this._transformStarship)
            default:
                return collection.results;
        }
    }

    getItem = async (name, id) => {
        const item = await this._getData(name, id);
        switch (name) {
            case 'planets':
                return this._transformPlanet(item);
            case 'people':
                return this._transformPerson(item)
            case 'starships':
                return this._transformStarship(item)
            default:
                return item;
        }
    }

    getImgUrl = (name, id) => {
        const category = this._transformPageNameToCategory(name);
        return `${ this._bodyImgUrl }${ category }/${ id }.jpg`
    }
}