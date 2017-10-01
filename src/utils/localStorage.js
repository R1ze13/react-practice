import config from '../config';

export default class LSManager {

	static get(field) {
		if (LSManager._isExists()) {
			const data = JSON.parse(localStorage.getItem(config.LS.name));

			if (!field)
				return data;
			else if (data[field])
				return data[field];
		}

		return undefined;
	}

	static set(field, data = {}) {
		let dataToStore = {};

		if (field) {
			dataToStore = LSManager.get();
			if (!dataToStore)
				dataToStore = {};
			else
				dataToStore[field] = data;
		} else {
			dataToStore = data;
		}

		localStorage.setItem(config.LS.name, JSON.stringify(dataToStore));
	}

	static _isExists() {
		return localStorage.getItem(config.LS.name) ? true : false;
	}

}
