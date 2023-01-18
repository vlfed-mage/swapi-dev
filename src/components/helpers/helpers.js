import {
    personDeps,
    planetDeps,
    starshipDeps
} from "../sw-components";

const Helpers = () => {

    return {
        getDeps: (name) => {
            switch (name) {
                case 'people':
                    return personDeps;
                case 'planets':
                    return planetDeps;
                case 'starships':
                    return starshipDeps;
            }
        }
    }
}

export default Helpers;