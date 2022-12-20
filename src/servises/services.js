export default class Services {
    _bodyUrl = 'https://swapi.dev/api/';

    async getResources(source, id = '') {
        const response = await fetch(`${ this._bodyUrl }${ source }/${ id }`);

        if(!response.ok) {
            throw new Error(`
                Could not fetch. Status ${ response.status }
            `)
        }

        return await response.json();
    }

    async getCollection(name) {
        return await this.getResources(name);
    }

    async getItem(name, id) {
        return await this.getResources(name, id);
    }
}