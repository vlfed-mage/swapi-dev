import dumb from "../images/death-star.svg";

const ApiServices = () => {

    const _bodyUrl = 'https://swapi.dev/api/',
    _bodyImgUrl = 'https://starwars-visualguide.com/assets/img/';

    async function _getData(name, id = '') {
        const data = await fetch(`${_bodyUrl}${name}/${id}`);

        if (!data.ok) {
            throw new Error(`
                Couldn't fetch. Status: ${ data.status }
            `)
        }

        return data.json();
    }

    function _extractId(url) {
        const regex = /\/([0-9]*)\/$/;
        return url.match(regex)[1];
    }

    const _transformPlanet = (planet) => {
        return {
            id: _extractId(planet.url),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter,
            selected: false
        }
    },

    _transformPerson = (person) => {
        return {
            id: _extractId(person.url),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color,
            selected: false
        }
    },

    _transformStarship = (starship) => {
        return {
            id: _extractId(starship.url),
            name: starship.name,
            manufacturer: starship.manufacturer,
            passengers: starship.passengers,
            starshipClass: starship.starship_class,
            selected: false
        }
    },

    _transformPageNameToCategory = (name) => {
        switch (name) {
            case 'people':
                return 'characters'
            default:
                return name;
        }
    },

    getItem = async (name, id) => {
        const item = await _getData(name, id);
        switch (name) {
            case 'planets':
                return _transformPlanet(item);
            case 'people':
                return _transformPerson(item)
            case 'starships':
                return _transformStarship(item)
            default:
                return item;
        }
    },

    getCollection = async (name) => {
        const collection = await _getData(name);
        switch (name) {
            case 'planets':
                return collection.results.map(_transformPlanet);
            case 'people':
                return collection.results.map(_transformPerson)
            case 'starships':
                return collection.results.map(_transformStarship)
            default:
                return collection.results;
        }
    };

    return {
        getData: (name, id) => {
            return id
                ? getItem(name, id)
                : getCollection(name);
        },

        getImgUrl: (name, id) => {
            const category = _transformPageNameToCategory(name);
            return `${_bodyImgUrl}${category}/${id}.jpg`
        },

        onImageError: (e) => {
            e.target.src = dumb;
        }
    }
}

export {
    ApiServices
};