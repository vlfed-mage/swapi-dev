import {
    _people,
    _planets,
    _starships
} from './dummy-data';
import dumb from "../images/death-star.svg";

const DummyApiServices = () => {

    const _bodyImgUrl = 'https://starwars-visualguide.com/assets/img/';

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
        }
    },

    _transformPerson = (person) => {
        return {
            id: _extractId(person.url),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color,
        }
    },

    _transformStarship = (starship) => {
        return {
            id: _extractId(starship.url),
            name: starship.name,
            manufacturer: starship.manufacturer,
            passengers: starship.passengers,
            starshipClass: starship.starship_class,
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
        switch (name) {
            case 'people':
                return _transformPerson(_people[id - 1]);
            case 'planets':
                return _transformPlanet(_planets[id - 1]);
            case 'starships':
                return _transformStarship(_starships[id - 1]);
            default:
                return _people;
        }
    },

    getCollection = async (name) => {
        switch (name) {
            case 'people':
                return _people.map(_transformPerson);
            case 'planets':
                return _planets.map(_transformPlanet);
            case 'starships':
                return _starships.map(_transformStarship);
            default:
                return _people;
        }
    };

    return {
        getData: (name, id) => {
            return id
                ? getItem(name, id)
                : getCollection(name);
        },

        getImgUrl: (name, id) => {
            return `https://fakeimg.pl/400x550/?text=${ name }`
        },

        onImageError: (e) => {
            e.target.src = dumb;
        }
    }
}

export {
    DummyApiServices
};