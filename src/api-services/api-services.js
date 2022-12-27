export default class ApiServices {

    _bodyUrl = 'https://swapi.dev/api/';

    async _gerData(name, id = '') {
        const data = await fetch(`${this._bodyUrl}${name}/${id}`);

        if (!data.ok) {
            throw new Error(`
                Couldn't fetch. Status: ${ data.status }
            `)
        }

        return data.json();
    }

    async getCollection(name) {
        const collection = await this._gerData(name);
        return collection.results;
    }

    async getItem(name, id) {
        const item = await this._gerData(name, id);
        return item;
    }
}